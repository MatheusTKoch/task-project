<template>
  <div>
    <button 
      :class="[
        'py-1.5 px-3 border rounded shadow transition-colors',
        customClass || 'bg-white hover:bg-gray-100 text-gray-800 border-gray-400 dark:bg-sky-800 dark:text-white dark:hover:bg-gray-800 dark:border-sky-600'
      ]"
      :disabled="disabled"
      :type="type"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "button"
  }
})
</script>