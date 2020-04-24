<template>
  <div v-if="counts" class="my-4">
    <p class="mb-2 text-center">{{ todaysCount[day] }} fasting around the World this day</p>
    <button class="block rounded shadow bg-indigo-500 p-4 text-white max-w-lg mx-auto">
      Yes, I am fasting today
    </button>
  </div>
</template>

<script>
export default {
  props: ["day"],
  data() {
    return {
      counts: null
    };
  },
  computed: {
    todaysCount() {
      return this.counts;
    }
  },
  async mounted() {
    const { data } = await this.$axios.get(
      "https://jsonbox.io/box_1aaddf204936eed8175d/5ea3098c920e740017eeb28f"
    );
    this.counts = data.count;
  }
};
</script>

<style></style>
