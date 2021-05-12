<template lang="html">
  <div class="Jokes">
    <h3>This are all the jokes retrieved:</h3>
    <h4 v-for="(joke, idx) in jokes" :key="idx">
      <span>{{ idx +1 + " - "}}</span>
      {{ joke }}
    </h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({ jokes: "getAllJokes" })
    // jokes(){
    //   return this.$store.getters.getAllJokes;
    // }
  }
}
</script>

<style lang="css" scoped>
</style>
