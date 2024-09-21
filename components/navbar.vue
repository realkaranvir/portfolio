<template>
  <div class="fixed top-0 w-screen p-8 flex justify-center">
    <nav
      :style="backgroundStyle"
      class="flex-1 text-white p-2 rounded-3xl transition-bg max-w-xl"
    >
      <ul class="flex justify-around">
        <li @click="scrollToTop">
          <router-link to="/">Home</router-link>
        </li>
        <li @click="scrollToTop">
          <router-link to="/about">About</router-link>
        </li>
        <li @click="scrollToTop">
          <router-link to="/">Projects</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { RouterLink } from "vue-router"

  export default {
    data() {
      return {
        scrollY: 0,
      }
    },
    computed: {
      backgroundStyle() {
        // Adjust the opacity based on the scroll position
        const opacity = this.scrollY > 100 ? 1 : 0 // Change opacity after 100px scroll
        return {
          backgroundColor: `rgba(0, 120, 148, ${opacity})`,
        }
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
      handleScroll() {
        // Get the scroll position
        this.scrollY = window.scrollY || document.documentElement.scrollTop
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
      },
    },
  }
</script>

<style scoped>
  .transition-bg {
    transition: background-color 0.5s ease;
  }
</style>
