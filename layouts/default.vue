<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex-1 ml-64">
      <transition name="fade-in-out" mode="out-in">
        <NuxtPage />
      </transition>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .fade-in-out-enter-active,
  .fade-in-out-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-in-out-enter,
  .fade-in-out-leave-to {
    opacity: 0;
  }
</style>
