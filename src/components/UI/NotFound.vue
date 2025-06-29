<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 flex flex-col">
    <base-header>
      <div class="font-bold text-indigo-800 dark:text-indigo-200">Task Project</div>
    </base-header>
    <div class="flex-1">
      <content-box>
        <h2 class="font-bold text-xl p-4 text-indigo-800 dark:text-indigo-200">Página Não Encontrada</h2>
        <div class="text-indigo-600 dark:text-indigo-300">
          Esta página não pôde ser encontrada - deseja retornar ao
          <router-link to="/login" class="underline underline-offset-2 font-medium hover:text-indigo-800 dark:hover:text-indigo-100 transition-colors"
            >login</router-link
          >?
        </div>
      </content-box>
    </div>
    <app-footer />
  </div>
</template>

<script setup>
import ContentBox from "./ContentBox.vue";
import BaseHeader from "./BaseHeader.vue";
import AppFooter from "./AppFooter.vue";
</script>
