<template>
  <aside class="w-64 bg-gray-800 text-white h-screen">
    <div class="p-6">
      <!-- Logo -->
      <div class="text-2xl mb-6">
        <router-link to="/" class="text-neon-blue hover:text-blue-300">
          Karan Sandhu
        </router-link>
      </div>

      <!-- Navigation -->
      <nav>
        <ul>
          <li class="mb-4">
            <router-link to="/" class="block text-neon-blue hover:text-blue-300">
              Home
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/about" class="block text-neon-blue hover:text-blue-300">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="block text-neon-blue hover:text-blue-300">
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
/* Optional: Add any additional scoped styles here */
</style>