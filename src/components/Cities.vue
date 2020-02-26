<template>
  <div>
    <b-jumbotron header="{{ header }}" lead="{{ description }}"></b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Cities",
  props: {
    header: String,
    description: String
  }
};
</script>