<template>
  <div class="home container">
    <div class="card">
      <h4>Dad jokes!</h4>
      <h2>{{ joke }}</h2>
      <a href="#">
        <VueLoadingButton
          class="btn"
          @click.native="addJoke"
          :loading="isLoading"
        >One more Dad!</VueLoadingButton>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueLoadingButton from 'vue-loading-button';


export default {
  name: 'Home',
  data: () => ({
    // joke: ''
  }),
  methods: {
    ...mapActions({ addJoke: 'setCurrentJoke'}),

    // addJoke(){
    //   // this.$store.dispatch("setCurrentJoke")   //Not necessary if using mapActions helper, instead, do:
    //   this.setCurrentJoke();
    // }
  },
  computed: {
    ...mapGetters({ joke: 'getCurrentJoke',
                    isLoading: 'getIsLoading'}),
    // joke() {
    //   // return this.$store.getters.getCurrentJoke;
    //   return this.getCurrentJoke;
    // }
  },
  // mounted () {   // Hook to load when page is mounted
  //   this.joke = this.$store.getters.getCurrentJoke;
  // },
  components: {
    VueLoadingButton,
  }
}
</script>
