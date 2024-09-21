<template>
  <div class="flex h-screen lg:flex-col">
    <Sidebar class="hidden lg:block" />
    <Navbar class="block lg:hidden" />
    <div class="flex-1 lg:ml-64 lg:mt-0 ml-0 mt-16">
      <transition name="fade-in-out" mode="out-in">
        <NuxtPage />
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // Scroll to the top of the page on refresh
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
  }
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
