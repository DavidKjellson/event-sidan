<template>
  <div id="frontpage">
    <h1 id="compname">Activityfy</h1>
    <div class="container-sm">
      <div class="row align-items-center" id="buttonLinks" v-for="city in cities" :key="city.route">
        <div class="col align-self-center">
          <router-link :to="'/cities/'+ city.location">
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
      cities: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000")
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.cities = result;
        });
    }
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
    url("/img/fireworks.jpg");
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

#compname {
  font-family: "Abel", sans-serif;
}
</style>