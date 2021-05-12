<template>
  <div class="home container">
    <div class="card">
      <h4>Dad jokes!</h4>
      <h2>{{ joke }}</h2>
      <a href="#">
        <div class="btn" @click="addJoke">
          Another Joke
        </div>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    // joke: ''
  }),
  methods: {
    addJoke(){
      this.$store.dispatch("setCurrentJoke")
    }
  },
  computed: {
    joke() {
      return this.$store.getters.getCurrentJoke;
    }
  },
  // mounted () {   // Hook to load when page is mounted
  //   this.joke = this.$store.getters.getCurrentJoke;
  // },
  components: {

  }
}
</script>
