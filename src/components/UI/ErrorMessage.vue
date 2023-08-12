<template>
  <div>
    <transition name="message">
      <p><slot></slot></p>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: medium;
  color: red;
}

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
