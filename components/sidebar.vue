<template>
  <aside class="w-64 bg-gray-800 h-screen fixed top-0 left-0 bg-opacity-20">
    <div class="p-6">
      <!-- Logo -->
      <div class="text-2xl mb-6">
        <p>Karan Sandhu</p>
      </div>

      <!-- Navigation -->
      <nav>
        <ul>
          <li class="mb-4">
            <router-link to="/" class="block hover:text-blue-800">
              <div class="flex items-center space-x-2 cursor-pointer">
                <ChevronRightIcon class="h-4 w-4 text-white" />
                <p>Home</p>
              </div>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/about" class="block hover:text-blue-800">
              <div class="flex items-center space-x-2 cursor-pointer">
                <ChevronRightIcon class="h-4 w-4 text-white" />
                <p>About</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div>
          <div
            @click="toggleProjects"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <ChevronRightIcon
              :class="{
                'rotate-90': isProjectsOpen,
                'rotate-0': !isProjectsOpen,
              }"
              class="h-4 w-4 text-white transition-transform duration-300"
            />
            <p class="block hover:text-blue-800 non-selectable">Projects</p>
          </div>
          <transition name="fade-in-out">
            <div
              v-if="isProjectsOpen"
              class="mb-2 ml-8 text-blue-800 animate-fade"
            >
              <router-link to="/foodfunds" class="block hover:text-blue-600">
                FoodFunds.js
              </router-link>
              <router-link to="/haggle" class="block hover:text-blue-600">
                Haggle.js
              </router-link>
              <router-link to="/tar" class="block hover:text-blue-600">
                Tar.c
              </router-link>
              <router-link to="/portfolio" class="block hover:text-blue-800">
                Portfolio.vue
              </router-link>
            </div>
          </transition>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
  import { ref } from "vue"
  import { ChevronRightIcon } from "@heroicons/vue/24/outline"

  export default {
    name: "Sidebar",
    components: {
      ChevronRightIcon,
    },
    setup() {
      // For the project links in sidebar
      const isProjectsOpen = ref(false)

      function toggleProjects() {
        isProjectsOpen.value = !isProjectsOpen.value
      }

      return { isProjectsOpen, toggleProjects }
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
