<template>
  <nav class="bg-black">
    <ul
      class="flex flex-row text-white py-8 justify-between max-w-4xl cursor-pointer mx-auto text-xl"
    >
      <li>
        <a href="#mainPage">Home page</a>
      </li>
      <li><a href="#howItWorks"> How it works?</a></li>
      <li>
        <a href="https://random-data-api.com/">Random Data API</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  transition: all 0.5s;
}

li:hover {
  transform: scale(1.1);
}
</style>
