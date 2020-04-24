<template>
  <div class="container max-w-lg mx-auto px-4">
    <div class="pt-10">
      <img src="logo.svg" class="mx-auto h-32 mb-2 w-auto" alt="" />
      <p class="text-4xl mb-4 font-bold text-gray-700 text-center">
        Ramadan Table
      </p>
      <p class="text-gray-700 mb-4 text-xl">
        Ramadan table is a open source project by Fayaz. If you need your city
        to be showcased please send me a google sheet of your fasting time table
        or a photo, I will add them to the city list.
      </p>
      <nuxt-link
        to="/addcity"
        class="text-indigo-600 block underline text-center mb-4"
      >
        Submit your city
      </nuxt-link>
      <ul class="bg-gray-200 text-gray-700 p-4 rounded-lg shadow">
        <nuxt-link
          :to="city"
          class="my-4 block cursor-pointer bg-gray-300 rounded p-3 transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
          v-for="(city, n) in cities"
          :key="n"
        >
          <p class="capitalize">{{ city }}</p>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const cities = await require(`~/assets/cities.json`);
    return { cities };
  }
};
</script>
