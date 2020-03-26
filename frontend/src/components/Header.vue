<template>
  <div>
    <div class="collapse bg-transparent" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div v-for="city in cities" :key="city.route">
            <router-link :to="'/cities/'+ city.location">
              <button
                type="button"
                class="btn btn-success"
                id="button"
              >{{ city['name' + $store.state.locale] }}</button>
            </router-link>
          </div>

          <div class="col-sm-8 col-md-7 py-1">
            <router-link class="link" :to="'/about'">
              <h4 class="text-dark">Om oss</h4>
            </router-link>
          </div>
          <div>
            <span class="flag" :value="$store.state.locale" @click="$store.commit('swedish')">
              <country-flag class="flag" country="se" size="medium" />
            </span>
            <span :value="$store.state.locale" @click="$store.commit('english')">
              <country-flag class="flag" country="gb" size="medium" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-light bg-transparent">
      <div class="container d-flex justify-content-between">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <h1 class="text-dark" id="name">Activityfy</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
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
          this.cities = result;
        });
    }
  }
};
</script>

<style scoped>
#name {
  font-family: "Abel", sans-serif;
  font-size: 30px;
}

#button {
  margin-top: 5px;
  margin-right: 10px;
  padding: 2px;
  width: 100px;
}

.link {
  text-decoration: none;
}

.flag {
  cursor: pointer;
}
</style>