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
    allJokes : ''
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
      const joke = await fetch(url, {headers});
      const j = await joke.json();
      state.commit("setCurrentJoke", j.joke)
    }
  },
  modules: {
  },
  getters : {
    // getCurrentJoke(state){
    //   return state.currentJoke;
    // }
    getCurrentJoke: state => state.currentJoke
  }
})
