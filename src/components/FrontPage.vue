<template>
  <div id="frontpage">
    <h1>Eventsidan</h1>
    <div class="container-sm">
      <div class="row align-items-center" id="buttonLinks" v-for="city in cities" :key="city.route">
        <div class="col align-self-center">
          <router-link to="/cities">
            <button type="button" class="btn btn-success btn-lg">{{ city.name }}</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenCity: null,
      cities: [
        { name: "Göteborg", route: "cities" },
        { name: "Stockholm", route: "stockholm" },
        { name: "Malmö", route: "malmö" }
      ]
    };
  }
};
</script>

<style scoped>
#frontpage {
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(240, 240, 240, 0.8),
      rgba(0, 0, 0, 0)
    ),
    url("../assets/img/fireworks.jpg");
  background-size: cover;
  width: 100%;
  background-position-x: 50%;
  background-position-y: 100%;
}
h1 {
  font-size: 5rem;
  padding-top: 15%;
}
button {
  font-size: 2rem;
  width: 340px;
}
#buttonLinks {
  margin-top: 5%;
}
</style>