<template>
  <div>
    <header>
      <Header />
    </header>

    <!-- HERO WITH IMG -->
    <section
      class="hero"
      :style="{ backgroundImage: 'url(/img/' + events[$route.params.city].hero + ')'}"
      v-if="events[$route.params.city] != undefined"
    >
      <h3
        v-if="events[$route.params.city] != undefined"
      >{{events[$route.params.city]['name' + $store.state.locale]}}</h3>
    </section>

    <!-- CONTAINER FOR EVENT-CARDS -->
    <a
      class="weatherwidget-io"
      :href="'https://forecast7.com/sv/' + events[$route.params.city].weather"
      data-mode="Current"
      data-days="3"
      data-theme="pure"
      v-if="events[$route.params.city] != undefined"
    >{{events[$route.params.city]['name' + $store.state.locale]}}</a>

    <div class="container p-3 mb-5 bg-white rounded" style="margin-bottom: 100px;">
      <h3
        class="jumbotron-heading"
        v-if="events[$route.params.city] != undefined"
      >{{ $t('activities') }} {{events[$route.params.city]['name' + $store.state.locale]}}</h3>
      <div>
        <b-button
          v-b-toggle.collapse-2
          class="m-1"
          variant="success"
          @click="options = !options"
        >{{ options ? $t('altarrowdown') : $t('altarrowup') }}</b-button>
        <b-collapse id="collapse-2">
          <div class="row">
            <div class="col">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  :placeholder="$t('search')"
                  aria-label="Search"
                  v-model="search"
                />
              </form>
            </div>
            <div class="col-lg">
              <div class="form-check">
                <ul class="filters">
                  <li>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="events[$route.params.city].events.children"
                      v-if="events[$route.params.city] != undefined"
                      v-model="selectedProperty"
                      value="children"
                    />
                    <label class="form-check-label" for="defaultCheck1">{{ $t('children') }}</label>
                  </li>
                  <li>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="events[$route.params.city].events.food"
                      v-if="events[$route.params.city] != undefined"
                      v-model="selectedProperty"
                      value="food"
                    />
                    <label class="form-check-label" for="defaultCheck1">{{ $t('food') }}</label>
                  </li>
                </ul>
                <ul class="filters">
                  <li>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="events[$route.params.city].events.accommodation"
                      v-if="events[$route.params.city] != undefined"
                      v-model="selectedProperty"
                      value="accommodation"
                    />
                    <label class="form-check-label" for="defaultCheck1">{{ $t('accommodation') }}</label>
                  </li>
                  <li>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="events[$route.params.city].events.parking"
                      v-if="events[$route.params.city] != undefined"
                      v-model="selectedProperty"
                      value="parking"
                    />
                    <label class="form-check-label" for="defaultCheck1">{{ $t('parking') }}</label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <ul style="list-style-type: none;">
                <li>
                  <strong>{{ $t('sort') }}</strong>
                </li>
                <li
                  @click="entranceSort(); numberedorder = !numberedorder"
                  class="sort"
                >{{ numberedorder ? $t('pricearrowup') : $t('pricearrowdown') }}</li>
                <li
                  @click="alphabeticalSort(); alphabetical = !alphabetical"
                  class="sort"
                >{{ alphabetical ? $t('a-z') : $t('z-a') }}</li>
              </ul>
            </div>
          </div>
        </b-collapse>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-4" :key="event.name" v-for="event in filteredProperties">
          <div class="card shadow mt-3">
            <img
              :src="'/img/' + event.img"
              class="card-img-top"
              alt="..."
              height="190px"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-text">{{event.name}}</h5>
              <p class="card-text">{{event['descriptionshort' + $store.state.locale]}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ $t('open') }}: {{event.openinghours}}</li>
              <li class="list-group-item">{{ $t('entrance') }}: {{event.entrance}} SEK</li>
              <li class="list-group-item">{{ $t('stop') }}: {{event.stop}}</li>
              <li class="list-group-item">{{ $t('children') }}: {{event.children | yesno}}</li>
            </ul>
            <div class="card-body">
              <div>
                <!-- Modal -->
                <b-button
                  v-b-modal="'modal-' + event.name"
                  class="btn bg-success text-white my-2 my-sm-0"
                >{{ $t('moreinfo') }}</b-button>

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
                          width="400"
                          height="350"
                          frameborder="0"
                          style="border:0"
                          :src="'https://www.google.com/maps/embed/v1/place?q=place_id:' + event.maplocation + '&key=' + API_KEY"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div class="col">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">{{ $t('open') }}: {{event.openinghours}}</li>
                          <li class="list-group-item">{{ $t('entrance') }}: {{event.entrance}} SEK</li>
                          <li class="list-group-item">{{ $t('stop') }}: {{event.stop}}</li>
                          <li
                            class="list-group-item"
                          >{{ $t('children') }}: {{event.children | yesno}}</li>
                          <li class="list-group-item">{{ $t('food') }}: {{event.food | yesno}}</li>
                          <li
                            class="list-group-item"
                          >{{ $t('accommodation') }}: {{event.accommodation | yesno}}</li>
                          <li class="list-group-item">{{ $t('parking') }}: {{event.parking | yesno}}</li>
                          <li class="list-group-item">
                            <a :href="event.websitelong">{{event.websiteshort}}</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <p>{{event['descriptionlong' + $store.state.locale]}}</p>
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

import Header from "./Header.vue";

export default {
  name: "Cities",
  components: {
    Header
  },
  data() {
    return {
      events: [],
      search: "",
      API_KEY: secret.API_KEY,
      selected: [],
      selectedProperty: [],
      options: true,
      numberedorder: true,
      alphabetical: true
    };
  },
  props: {
    header: String,
    description: String
  },
  created() {
    this.fetchData();
    this.entranceSort();
    this.alphabeticalSort();
  },
  updated() {
    this.setTitle();
  },
  // VÄDERLÖSNING
  mounted: function() {
    this.$nextTick(function() {
      if (window.__weatherwidget_init) {
        window.__weatherwidget_init();
      }
    });
  },

  methods: {
    fetchData() {
      fetch("http://localhost:3000")
        .then(response => response.json())
        .then(result => {
          this.events = result;
        });
    },
    lowestHighest(a, b) {
      return a.entrance - b.entrance;
    },
    highestLowest(a, b) {
      return b.entrance - a.entrance;
    },
    aZ(a, b) {
      return ("" + a.name).localeCompare(b.name);
    },
    zA(a, b) {
      return ("" + b.name).localeCompare(a.name);
    },
    entranceSort() {
      if (this.events[this.$route.params.city] != undefined) {
        if (this.numberedorder) {
          this.events[this.$route.params.city].events.sort(this.lowestHighest);
        } else {
          this.events[this.$route.params.city].events.sort(this.highestLowest);
        }
      }
    },
    alphabeticalSort() {
      if (this.events[this.$route.params.city] != undefined) {
        if (this.alphabetical) {
          this.events[this.$route.params.city].events.sort(this.aZ);
        } else {
          this.events[this.$route.params.city].events.sort(this.zA);
        }
      }
    },
    setTitle() {
      if (this.events[this.$route.params.city] != undefined) {
        document.title =
          this.events[this.$route.params.city][
            "name" + this.$store.state.locale
          ] + " - Activitify";
      }
    },
    swedish() {
      this.$i18n.locale = "sv";
    },
    english() {
      this.$i18n.locale = "en";
    }
  },
  computed: {
    filteredProperties() {
      if (this.events[this.$route.params.city] != undefined) {
        if (this.selectedProperty.length === 0) {
          return this.events[this.$route.params.city].events.filter(event => {
            return (
              event.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            );
          });
        } else {
          return this.events[this.$route.params.city].events
            .filter(event => {
              let keys = this.selectedProperty;
              let n = 0;
              keys.forEach(key => {
                if (event[key]) {
                  n++;
                }
              });
              return n === this.selectedProperty.length;
            })
            .filter(event => {
              return (
                event.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
              );
            });
        }
      }
      return [];
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 20px;
}

.filters {
  list-style: none;
  text-align: left;
  display: inline-block;
  /* margin: 20px; */
}
.form-check {
  padding: 0;
}

.filters li {
  margin: 5px;
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
/* .card {
  margin: auto;
} */

.hero {
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
.sort {
  cursor: pointer;
}
select:invalid {
  color: gray;
}

@media screen and (max-width: 992px) {
  iframe {
    width: 70vw;
    height: 40vh;
    margin: auto;
  }
}

@media (width: 768px) {
  iframe {
    width: 55vw;
  }
}
</style>