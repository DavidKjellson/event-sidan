<template>
  <div id="frontpage">
    <h1 id="compname">Activityfy</h1>
    <span :value="$store.state.locale" @click="swedish(); $store.commit('swedish')">
      <country-flag class="flag" country="se" size="big" />
    </span>
    <span :value="$store.state.locale" @click="english(); $store.commit('english')">
      <country-flag class="flag" country="gb" size="big" />
    </span>
    <div class="container-sm">
      <div class="row align-items-center" id="buttonLinks" v-for="city in cities" :key="city.route">
        <div class="col align-self-center">
          <router-link :to="'/cities/'+ city.location">
            <button
              type="button"
              class="btn btn-success btn-lg"
            >{{ city['name' + $store.state.locale] }}</button>
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
    },
    swedish() {
      this.$i18n.locale = "sv";
    },
    english() {
      this.$i18n.locale = "en";
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
  padding-top: 5rem;
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

.flag {
  cursor: pointer;
}
</style>