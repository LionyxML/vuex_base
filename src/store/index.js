import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// URLs for the jokes API
const url = 'https://icanhazdadjoke.com/';
const headers = { Accept: 'application/json'};


export default new Vuex.Store({
  state: {
    // Information shared across the app
    currentJoke : 'This is a joke man!',
    allJokes : [],
    isLoading: false,

  },
  mutations: {                     // .commit to alter a mutation
    // Synchronous way to update states on VueX Store
    setCurrentJoke(state, payload){
       state.currentJoke = payload;
       state.allJokes.push(payload);

    }
  },
  actions: {                      // .dispatch to alter an action
    // Asynchronous way to update states on VueX Store
    async setCurrentJoke(state){
      state.isLoading = true;
      console.log(state.isLoading);
      const joke = await fetch(url, {headers});
      const j = await joke.json();
      state.isLoading = false;
      console.log(state.isLoading);
      state.commit("setCurrentJoke", j.joke)
    }
  },
  modules: {
  },
  getters : {
    // getCurrentJoke(state){
    //   return state.currentJoke;
    // }
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes,
    getIsLoading: state => state.isLoading
  }
})
