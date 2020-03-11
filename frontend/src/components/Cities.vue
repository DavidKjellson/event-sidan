<template>
  <div>
    <header>
      <div class="collapse bg-transparent" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Sök event"
                  aria-label="Search"
                  v-model="search"
                />
                <button class="btn bg-success text-white my-2 my-sm-0" type="submit">Sök</button>
              </form>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
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
    </header>

    <!-- HERO WITH IMG -->
    <section class="hero">
      <h3>Göteborg {{events.hero}}</h3>
    </section>

    <!-- CONTAINER FOR EVENT-CARDS -->
    <a
      class="weatherwidget-io"
      href="https://forecast7.com/sv/57d7111d97/gothenburg/"
      data-mode="Current"
      data-days="3"
      data-theme="pure"
    >Gothenburg, Sweden</a>

    <div class="container p-3 mb-5 bg-white rounded" style="margin-bottom: 100px;">
      <div class="row">
        <div class="col" :key="event.name" v-for="event in filterSearch">
          <div class="card shadow mt-3" style="width: 18rem;">
            <img :src="event.img" class="card-img-top" alt="..." height="190px" width="100%" />
            <div class="card-body">
              <h5 class="card-text">{{event.name}}</h5>
              <p class="card-text">{{event.descriptionshort}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Öppetider: {{event.openinghours}}</li>
              <li class="list-group-item">Inträde: {{event.entrance}} SEK</li>
              <li class="list-group-item">Barnanpassat: {{event.children | yesno}}</li>
            </ul>
            <div class="card-body">
              <div>
                <!-- Modal -->
                <b-button
                  v-b-modal="'modal-' + event.name"
                  class="btn bg-success text-white my-2 my-sm-0"
                >Mer information</b-button>

                <b-modal
                  :id="'modal-' + event.name"
                  size="xl"
                  centered
                  :title="event.name"
                  :hide-footer="true"
                >
                  <div class="container event-modal">
                    <div class="row">
                      <div class="col">
                        <iframe
                          width="350"
                          height="350"
                          frameborder="0"
                          style="border:0"
                          :src="'https://www.google.com/maps/embed/v1/place?q=place_id:' + event.maplocation + '&key=' + API_KEY"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div class="col">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Öppetider: {{event.openinghours}}</li>
                          <li class="list-group-item">Inträde: {{event.entrance}} SEK</li>
                          <li class="list-group-item">Barnanpassat: {{event.children | yesno}}</li>
                          <li class="list-group-item">Mat & Dryck: {{event.food | yesno}}</li>
                          <li class="list-group-item">Boende: {{event.accommodation | yesno}}</li>
                          <li class="list-group-item">Parkering: {{event.parking | yesno}}</li>
                        </ul>
                      </div>
                      <div class="col">
                        <p>{{event.descriptionlong}}</p>
                      </div>
                    </div>
                    <div class="row"></div>
                  </div>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import secret from "../secret";

!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");

export default {
  name: "Cities",
  data() {
    return {
      events: [],
      search: "",
      API_KEY: secret.API_KEY
    };
  },
  props: {
    header: String,
    description: String
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/")
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.events = result;
        });
    }
  },
  computed: {
    filterSearch() {
      return this.events.filter(event => {
        return event.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 20px;
}

.weatherwidget-io {
  margin-bottom: 30px;
  /* width: 400px; */
}

.highlight {
  display: none;
}
.event-modal img {
  width: 300px;
  height: 250px;
}
.event-modal {
  /* height: 50vh; */
  margin: auto;
}
.card {
  margin: auto;
}

.hero {
  background-image: url(../assets/img/goteborg.jpg);
  min-height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: white;
}

.hero h3 {
  color: white;
  font-size: 48px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 5px;
  padding-top: 120px;
}

#name {
  font-family: "Abel", sans-serif;
  font-size: 30px;
}
@media screen and (max-width: 992px) {
  iframe {
    width: 75vw;
    height: 40vh;
    margin: auto;
  }
}
</style>