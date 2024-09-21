<template>
  <div class="flex-1 text-center p-10">
    <h1 class="text-8xl mb-10">Hello.</h1>
    <h2 class="text-4xl mb-20">
      I'm Karan, a software engineering major at Cal Poly SLO.
    </h2>
    <h3 class="mb-10">Here are some of my projects:</h3>
    <div class="flex flex-col items-center">
      <div
        class="flex flex-col items-center text-center w-72 h-72 rounded-3xl bg-black bg-opacity-10 p-5 space-y-5"
      >
        <h4 class="text-3xl linebreak-none">
          {<span class="text-mild-orange">FoodFunds</span>}
        </h4>
        <div class="flex flex-col text-center items-center">
          <img src="/images/reactIcon.png" class="w-10 h-10" />
          <p>React.JS</p>
        </div>
        <div class="flex flex-col text-center items-center">
          <img src="/images/expressIcon.png" class="w-10 h-10" />
          <p>Express.JS</p>
        </div>
        <p>Grocery Tracker</p>
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
