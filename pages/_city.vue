<template>
  <main class="text-gray-700" v-if="time_table">
    <section>
      <ul class="flex overflow-x-auto bg-white" id="days">
        <li v-for="(item, id) in time_table" :key="id" :id="`day-${id}`">
          <div
            class="p-4 text-center cursor-pointer"
            @click="selectedDay = id"
            :class="{ 'bg-indigo-500 text-white': id == selectedDay }"
          >
            <p class="mb-2 text-2xl font-bold">{{ id + 1 }}</p>
            <div class="flex items-center text-center">
              <div class="px-2 border-r">
                <p class="text-sm">{{ item.sehri }}</p>
                <p>am</p>
              </div>
              <div class="px-2 text-sm">
                <p>{{ item.iftar }}</p>
                <p>pm</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <div class="text-center mb-8">
        <div class="my-8">
          <nuxt-link to="/" class="text-indigo-500 underline">{{ city }}</nuxt-link>
          <h1 class="text-6xl font-bold text-center">
            Day {{ selectedDay + 1 }}
          </h1>
          <small>{{ time_table[selectedDay].date }}</small>
        </div>
        <!-- <p>4 hours till Iftaar</p> -->
      </div>
      <div class="grid grid-cols-2 gap-4 text-center">
        <div>
          <img class="mx-auto" src="Sunrise.svg" alt="" />
          <p>Sehri</p>
          <p class="text-2xl">{{ time_table[selectedDay].sehri }} am</p>
        </div>
        <div>
          <img class="mx-auto" src="Sunset.svg" alt="" />
          <p>Iftaar</p>
          <p class="text-2xl">{{ time_table[selectedDay].iftar }} pm</p>
        </div>
      </div>
    </section>
    <!-- <section class="asd">
      <counter :day="selectedDay" />
    </section> -->
  </main>
</template>

<script>
// import counter from "~/components/counter";
export default {
  // components: {
  //   counter
  // },
  data() {
    return {
      time_table: null,
      city: null,
      selectedDay: 0,
      today: null
    };
  },
  mounted() {
    this.$axios
      .get(`${process.env.baseURL}/${this.$route.params.city}.json`)
      .then(resp => {
        this.time_table = resp.data.time_table;
        this.city = resp.data.name;
        var now = new Date();
        var currentDate = now.getDate();
        var currentMonth = now.getMonth() + 1;
        var match = resp.data.time_table.find(
          ob =>
            ob.date.split("-")[0] == currentDate &&
            ob.date.split("-")[1] == currentMonth
        );
        this.selectedDay = match.id;
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        document
          .getElementById(`day-${this.selectedDay}`)
          .scrollIntoView({ behavior: "smooth", block: "center" });
      });
  }
};
</script>

<style></style>
