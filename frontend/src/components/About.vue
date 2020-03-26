<template>
  <div>
    <Header />
    <div class="container">
      <div class="jumbotron jumbotron-fluid bg-light text-dark">
        <div class="container" v-if="$store.state.locale === '_SV'">
          <h1>Om oss</h1>
          <p class="lead text-left">
            Activityfy vill erbjuda lättillgänglig underhållning för den aktiva karriärfamiljen, ungdomar eller våra pensionärer landet över.
            Där vi fokuserar på att leverera ett brett urval av aktiviteter och evenemang på ett ekonomiskt och användarvänlig sätt.
            Activityfy vill fylla hålrummet på marknaden för att så smidigt som möjligt presentera aktiviteter landet över och så småningom världen över.
            Samtidigt vill vi underlätta upptäckten av de bästa resmålen utefter andras kundupplevelser och skapa trygghet vid eventuella köp.
            En helt gratis tjänst att utnyttja när du enkelt vill organisera aktiviteter och resor med familj, vänner eller bekanta.
          </p>
          <h1>Om arbetet</h1>
          <p class="lead text-left">
            Activityfy är en tjänst framtaget på kort tid genom ett agilt arbetssätt för att leverera värde på kort tid inom en marknad som kontinuerligt kräver insats från organisationen/företaget själva.
            Vi på Activityfy tror på starkt samarbete mellan alla involverade för en så agil utvecklingsprocess som möjlig och för att få en samlad och slagkraftig översikt av vad som kan erbjudas inom detta område.
          </p>
        </div>
        <div class="container" v-else>
          <h1>About us</h1>
          <p class="lead text-left">
            Activityfy wants to provide easily accessible entertainment for the active career family, young people or our pensioners across the country.
            Where we focus on delivering a wide range of activities and events in an economical and user-friendly way.
            Activityfy wants to fill the void in the market to present activities across the country as quickly as possible and eventually around the world.
            At the same time, we want to facilitate the discovery of the best travel destinations along the lines of other customers' experiences and create security in the event of any purchases.
            A completely free service to use when you want to easily organize activities and trips with family, friends or acquaintances.
          </p>
          <h1>Our work</h1>
          <p class="lead text-left">
            Activityfy is a service created in a short time through an agile way of delivering value in a short time in a market that requires continuous effort from the organization / company itself.
            We at Activityfy believe in strong collaboration between everyone involved for as agile a development process as possible and to get a comprehensive and powerful overview of what can be offered in this area.
          </p>
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
  updated() {
    this.setTitle();
  },
  methods: {
    setTitle() {
      if (this.$store.state.locale === "_SV") {
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