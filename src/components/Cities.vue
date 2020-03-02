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
                  placeholder="Sök stad"
                  aria-label="Search"
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
      <div class="navbar navbar-dark bg-transparent">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <h1 class="text-dark" id="name">Eventsidan</h1>
          </a>
          <button
            class="navbar-toggler bg-success"
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
      <h3>Göteborg</h3>
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
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img src="../assets/img/liseberg.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Nordens största nöjespark! Ett måste för barnfamiljen.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Öppetider: 11.00 - 23.00</li>
              <li class="list-group-item">Inträde: 110kr</li>
              <li class="list-group-item">Barnanpassat: Ja</li>
            </ul>
            <div class="card-body">
              <button class="btn bg-success text-white my-2 my-sm-0" type="submit">Mer information</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img
              src="../assets/img/universeum.jpg"
              class="card-img-top"
              alt="..."
              height="190px"
              width="100%"
            />
            <div class="card-body">
              <p class="card-text">Universeum är en plats där kunskap leks fram.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Öppetider: 10.00 - 18.00</li>
              <li class="list-group-item">Inträde: 150kr</li>
              <li class="list-group-item">Barnanpassat: Ja</li>
            </ul>
            <div class="card-body">
              <button class="btn bg-success text-white my-2 my-sm-0" type="submit">Mer information</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow" style="width: 18rem;">
            <img src="../assets/img/gbgmuseum.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Här finns en internationellt uppmärksammad samling</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Öppetider: 11.00 - 18.00</li>
              <li class="list-group-item">Inträde: 60kr</li>
              <li class="list-group-item">Barnanpassat: Ja</li>
            </ul>
            <div class="card-body">
              <button class="btn bg-success text-white my-2 my-sm-0" type="submit">Mer information</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  props: {
    header: String,
    description: String
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

.card {
  justify-content: center;
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
</style>