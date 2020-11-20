import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },

  mutations: {
    setUserProfile(state, value) {
      state.userProfile = value
    }
  },

  actions: {

    async login({ dispatch}, form) {
      debugger
      const user = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
      debugger
      dispatch('fetchUserProfile', user)
    },

    async fetchUserProfile({ commit }, user) {
      // debugger
      console.log('user in fetchUserProfile')
      const userProfile = await firebase.usersCollection.doc(user.uid).get()
      console.log(userProfile)

      commit('setUserProfile', userProfile.data())

      router.push('/')
    },

    async signup({ dispatch }, form) {
      const user = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password)

      await firebase.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      dispatch('fetchUserProfile', user)
    }
  },

  modules: {
  }
})
