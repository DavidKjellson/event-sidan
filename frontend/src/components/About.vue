<template>
  <div>
    <Header />
    <div class="container">
      <div class="jumbotron jumbotron-fluid bg-light text-dark">
        <div class="container">
          <h1>{{ $t('about') }}</h1>
          <p class="lead text-left">{{ $t('aboutlong') }}</p>
          <h1>{{ $t('work') }}</h1>
          <p class="lead text-left">{{ $t('worklong') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "About",
  components: {
    Header
  },
  created() {
    this.setTitle();
  },
  methods: {
    setTitle() {
      if (this.$i18n.locale === "se") {
        document.title = "Om oss - Activitify";
      } else {
        document.title = "About - Activitify";
      }
    }
  }
};
</script>

<style scoped>
#about {
  width: 80%;
  margin: auto;
  overflow: hidden;
}

#main {
  float: left;
  width: 70%;
  padding: 0 30px;
  box-sizing: border-box;
}

#sidebar {
  float: right;
  width: 30%;
  background: #333;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
</style>