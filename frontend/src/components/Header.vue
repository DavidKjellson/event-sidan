<template>
  <div>
    <div class="collapse bg-transparent" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-md-6 py-4"></div>
          <div class="col-md-6 py-4">
            <!-- <h4 class="text-dark">Contact</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-dark">Follow on Twitter</a>
                </li>
                <li>
                  <a href="#" class="text-dark">Like on Facebook</a>
                </li>
                <li>
                  <a href="#" class="text-dark">Email me</a>
                </li>
            </ul>-->
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
  name: "Header"
};
</script>

<style scoped>
#name {
  font-family: "Abel", sans-serif;
  font-size: 30px;
}
</style>