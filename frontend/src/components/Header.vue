<template>
  <div>
    <div class="collapse bg-transparent" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="pr-1" v-for="city in cities" :key="city.route">
            <router-link :to="'/cities/'+ city.location">
              <button
                type="button"
                class="btn btn-success"
                id="button"
              >{{ city['name' + $store.state.locale] }}</button>
            </router-link>
          </div>

          <div class="col mt-2">
            <router-link class="link" :to="'/about'">
              <h4 class="text-dark">{{ $t('about') }}</h4>
            </router-link>
          </div>
          <div class="col mt-2">
            <span
              class="flag"
              :value="$store.state.locale"
              @click="swedish(); $store.commit('swedish')"
            >
              <country-flag class="flag" country="se" size="normal" />
            </span>
            <span :value="$store.state.locale" @click="english(); $store.commit('english')">
              <country-flag class="flag" country="gb" size="normal" />
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
#name {
  font-family: "Abel", sans-serif;
  font-size: 30px;
}

#button {
  margin-top: 5px;
  /* margin-right: 10px; */
  /* padding: 2px; */
  width: 100px;
}

.link {
  text-decoration: none;
}

.flag {
  cursor: pointer;
}

@media screen and (max-width: 992px) {
  .text-dark {
    font-size: 20px;
  }

  span {
    float: left;
  }
}
</style>