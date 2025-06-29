<template>
  <div class="task-item-container">
    <div 
      :class="[
        'task-item',
        task.completed ? 'task-completed' : '',
        expanded ? 'task-expanded' : ''
      ]"
    >
      <div class="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleTaskComplete"
          class="w-5 h-5 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
        />
        
        <span 
          :class="[
            'flex-1 text-left',
            task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'
          ]"
        >
          {{ task.taskText }}
        </span>
        
        <div v-if="task.subtasks && task.subtasks.length > 0" class="flex items-center gap-2">
          <span class="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
            {{ completedSubtasks }}/{{ task.subtasks.length }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          v-if="task.subtasks && task.subtasks.length > 0"
          @click="toggleExpanded"
          class="p-1 rounded hover:bg-indigo-100 dark:hover:bg-slate-600 transition-colors"
          :title="expanded ? 'Recolher subtarefas' : 'Expandir subtarefas'"
        >
          <Icon 
            :icon="expanded ? 'mdi:chevron-up' : 'mdi:chevron-down'" 
            :color="isDark ? '#a5b4fc' : '#4338ca'"
            width="20" 
            height="20"
          />
        </button>
        
        <button
          @click="toggleAddingSubtask"
          class="p-1 rounded hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
          title="Adicionar subtarefa"
        >
          <Icon 
            icon="mdi:plus" 
            :color="isDark ? '#6ee7b7' : '#059669'"
            width="20" 
            height="20"
          />
        </button>
        
        <button
          @click="$emit('delete-task')"
          class="delete-btn"
          title="Excluir tarefa"
        >
          <Icon icon="mdi-light:delete" width="20" height="20" />
        </button>
      </div>
    </div>

    <div v-if="addingSubtask" class="subtask-form">
      <div class="flex gap-2 mt-2 ml-8">
        <input
          v-model="newSubtaskText"
          @keydown.enter="addSubtask"
          @keydown.escape="cancelAddSubtask"
          placeholder="Digite a subtarefa..."
          class="flex-1 px-3 py-2 text-sm border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
          ref="subtaskInput"
        />
        <button
          @click="addSubtask"
          class="px-3 py-2 bg-emerald-500 text-white text-sm rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Adicionar
        </button>
        <button
          @click="cancelAddSubtask"
          class="px-3 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>

    <div v-if="expanded && task.subtasks && task.subtasks.length > 0" class="subtasks-container">
      <div class="ml-8 mt-2 space-y-2">
        <div
          v-for="(subtask, index) in task.subtasks"
          :key="index"
          :class="[
            'subtask-item',
            subtask.completed ? 'subtask-completed' : ''
          ]"
        >
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              :checked="subtask.completed"
              @change="toggleSubtaskComplete(index)"
              class="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
            />
            <span 
              :class="[
                'flex-1 text-sm text-left',
                subtask.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'
              ]"
            >
              {{ subtask.text }}
            </span>
            <button
              @click="deleteSubtask(index)"
              class="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              title="Excluir subtarefa"
            >
              <Icon 
                icon="mdi:close" 
                color="#ef4444"
                width="16" 
                height="16"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { Icon } from '@iconify/vue';
import { useDark } from '@vueuse/core';

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['delete-task', 'update-task']);

const isDark = useDark();
const expanded = ref(false);
const addingSubtask = ref(false);
const newSubtaskText = ref('');
const subtaskInput = ref(null);

const completedSubtasks = computed(() => {
  if (!props.task.subtasks) return 0;
  return props.task.subtasks.filter(subtask => subtask.completed).length;
});

const allSubtasksCompleted = computed(() => {
  if (!props.task.subtasks || props.task.subtasks.length === 0) return false;
  return props.task.subtasks.every(subtask => subtask.completed);
});

function toggleExpanded() {
  expanded.value = !expanded.value;
}

async function toggleAddingSubtask() {
  addingSubtask.value = !addingSubtask.value;
  if (addingSubtask.value) {
    await nextTick();
    subtaskInput.value?.focus();
  }
}

function cancelAddSubtask() {
  addingSubtask.value = false;
  newSubtaskText.value = '';
}

function addSubtask() {
  if (!newSubtaskText.value.trim()) return;
  
  const updatedTask = { ...props.task };
  if (!updatedTask.subtasks) {
    updatedTask.subtasks = [];
  }
  
  updatedTask.subtasks.push({
    text: newSubtaskText.value.trim(),
    completed: false
  });
  
  emit('update-task', updatedTask);
  newSubtaskText.value = '';
  addingSubtask.value = false;
  expanded.value = true; 
}

function deleteSubtask(index) {
  const updatedTask = { ...props.task };
  updatedTask.subtasks.splice(index, 1);
  emit('update-task', updatedTask);
}

function toggleSubtaskComplete(index) {
  const updatedTask = { ...props.task };
  updatedTask.subtasks[index].completed = !updatedTask.subtasks[index].completed;

  const allCompleted = updatedTask.subtasks.every(subtask => subtask.completed);
  if (allCompleted && updatedTask.subtasks.length > 0) {
    updatedTask.completed = true;
  } else if (updatedTask.completed && !allCompleted) {
    updatedTask.completed = false;
  }
  
  emit('update-task', updatedTask);
}

function toggleTaskComplete() {
  const updatedTask = { ...props.task };
  updatedTask.completed = !updatedTask.completed;

  if (updatedTask.completed && updatedTask.subtasks) {
    updatedTask.subtasks.forEach(subtask => {
      subtask.completed = true;
    });
  }

  else if (!updatedTask.completed && updatedTask.subtasks) {
    updatedTask.subtasks.forEach(subtask => {
      subtask.completed = false;
    });
  }
  
  emit('update-task', updatedTask);
}
</script>

<style scoped>
.task-item-container {
  margin-bottom: 0.5rem;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.dark .task-item {
  background: rgba(51, 65, 85, 0.7);
  border-color: rgba(148, 163, 184, 0.3);
}

.task-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
}

.dark .task-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.task-completed {
  opacity: 0.7;
}

.task-expanded {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.subtasks-container {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 0.5rem 0;
  backdrop-filter: blur(5px);
}

.dark .subtasks-container {
  background: rgba(51, 65, 85, 0.3);
  border-color: rgba(148, 163, 184, 0.1);
}

.subtask-item {
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.subtask-item:hover {
  background: rgba(99, 102, 241, 0.05);
}

.dark .subtask-item:hover {
  background: rgba(148, 163, 184, 0.1);
}

.subtask-completed {
  opacity: 0.6;
}

.subtask-form {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 0.5rem;
  backdrop-filter: blur(5px);
}

.dark .subtask-form {
  background: rgba(51, 65, 85, 0.5);
  border-color: rgba(148, 163, 184, 0.1);
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #ef4444;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.1);
  transform: scale(1.1);
}
</style>
