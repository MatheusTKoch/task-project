<template>
  <footer class="mt-auto py-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
    <div class="flex items-center justify-center gap-6">
      <p>
        © 2025 Task Project - Desenvolvido com 
        <Icon icon="mdi:heart" class="inline text-red-500 mx-1" width="14" height="14" />
        por 
        <a 
          href="https://github.com/MatheusTKoch" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors font-medium"
        >
          Matheus T. Koch
        </a>
      </p>
      <a 
        href="https://github.com/MatheusTKoch/task-project" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        title="Ver código no GitHub"
      >
        <Icon icon="mdi:github" width="16" height="16" />
        <span class="text-xs">GitHub</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
