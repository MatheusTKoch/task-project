<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 text-left align-middle shadow-2xl transition-all border border-indigo-100 dark:border-slate-700"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-bold leading-6 text-indigo-900 dark:text-indigo-100"
              >
                {{ title }}
              </DialogTitle>
              <div class="mt-2">
                <div class="text-sm text-indigo-700 dark:text-indigo-300">
                  <slot name="content">
                    {{ message }}
                  </slot>
                </div>
              </div>

              <div class="mt-4 flex gap-2 justify-end">
                <slot name="actions">
                  <button
                    v-if="showCancel"
                    type="button"
                    class="inline-flex justify-center rounded-md border border-gray-300 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:bg-slate-600/80 dark:text-white dark:border-slate-500 dark:hover:bg-slate-700 transition-colors"
                    @click="cancelModal"
                  >
                    {{ cancelText }}
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 shadow-md hover:shadow-lg transition-all"
                    @click="confirmModal"
                  >
                    {{ confirmText }}
                  </button>
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Confirmação'
  },
  message: {
    type: String,
    default: ''
  },
  confirmText: {
    type: String,
    default: 'OK'
  },
  cancelText: {
    type: String,
    default: 'Cancelar'
  },
  showCancel: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

function closeModal() {
  emit('update:modelValue', false)
}

function confirmModal() {
  emit('confirm')
  closeModal()
}

function cancelModal() {
  emit('cancel')
  closeModal()
}
</script>
