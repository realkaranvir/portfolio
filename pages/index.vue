<template>
  <div class="flex flex-col items-center text-center p-10">
    <h1 class="text-8xl mb-10">Hello.</h1>
    <h2 class="text-4xl mb-20">
      I'm Karan, a software engineer studying at <br />
      <span class="text-green-800">Cal Poly SLO</span>.
    </h2>
    <h3 class="mb-10">Here are some of my projects:</h3>
    <div class="flex flex-wrap justify-center">
      <div
        class="flex flex-col items-center text-center w-72 h-72 rounded-3xl bg-black bg-opacity-10 p-5 space-y-5 m-5"
      >
        <h4 class="text-3xl">
          {<span class="text-neon-blue">FoodFunds</span>}
        </h4>
        <p>Grocery Tracker</p>
        <div class="flex flex-col text-center items-center">
          <img src="/images/reactIcon.png" class="w-10 h-10" />
          <p>React.JS</p>
        </div>
        <div class="flex flex-col text-center items-center">
          <img src="/images/expressIcon.png" class="w-10 h-10" />
          <p>Express.JS</p>
        </div>
      </div>

      <div
        class="flex flex-col items-center text-center w-72 h-72 rounded-3xl bg-black bg-opacity-10 p-5 space-y-5 m-5"
      >
        <h4 class="text-3xl">{<span class="text-mild-orange">Tar</span>}</h4>
        <p>Recreation of Tar</p>
        <div class="flex flex-col text-center items-center">
          <img src="/images/cIcon.png" class="w-9 h-10" />
          <p>C</p>
        </div>
      </div>

      <div
        class="flex flex-col items-center text-center w-72 h-72 rounded-3xl bg-black bg-opacity-10 p-5 space-y-5 m-5"
      >
        <h4 class="text-3xl">{<span class="text-neon-blue">Haggle</span>}</h4>
        <p>Online Marketplace</p>
        <div class="flex flex-col text-center items-center">
          <img src="/images/reactIcon.png" class="w-10 h-10" />
          <p>React.JS</p>
        </div>
        <div class="flex flex-col text-center items-center">
          <img src="/images/expressIcon.png" class="w-10 h-10" />
          <p>Express.JS</p>
        </div>
      </div>
      <div
        class="flex flex-col items-center text-center w-72 h-72 rounded-3xl bg-black bg-opacity-10 p-5 space-y-5 m-5"
      >
        <h4 class="text-3xl">
          {<span class="text-sea-green">Portfolio</span>}
        </h4>
        <p>The Page You're On</p>
        <div class="flex flex-col text-center items-center">
          <img src="/images/vueIcon.png" class="w-10 h-10" />
          <p>Vue.JS</p>
        </div>
        <div class="flex flex-col text-center items-center">
          <img src="/images/nuxtIcon.svg" class="w-10 h-10" />
          <p>Nuxt.JS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexPage",
  }
</script>

<style scoped></style>
