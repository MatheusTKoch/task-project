<template>
  <div>
    <transition name="message">
      <p class="text-base text-red-600"><slot></slot></p>
    </transition>
  </div>
</template>

<style scoped>
.message-enter-active {
  animation: modal 0.3s ease-out;
}

.message-leave-active {
  animation: modal 0.3s ease-in reverse;
}

@keyframes message {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
