<template>
  <div id="frontpage">
    <div class="container-sm">
      <h1>Eventsidan</h1>
      <b-form-input id="citylist" list="my-list-id"></b-form-input>

      <datalist id="my-list-id">
        <option>Manual Option</option>
        <option v-for="city in cities" :key="city.route" @click="enterCityPage">{{ city.name }}</option>
      </datalist>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        { name: "Göteborg", route: "göteborg" },
        { name: "Stockholm", route: "stockholm" },
        { name: "Malmö", route: "malmö" }
      ]
    };
  },
  methods: {
    enterCityPage() {}
  }
};
</script>

<style scoped>
#citylist {
  width: 50%;
  height: 60px;
  font-size: 1.5rem;
  display: inline-block;
  text-align: center;
  margin-top: 30%;
}
#citylist option {
  font-size: 3rem;
}
#frontpage {
  background-image: url("../assets/img/startpage.jpg");
  height: 100vh;
}
</style>