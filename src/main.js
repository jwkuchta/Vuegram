import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './assets/scss/app.scss'

Vue.config.productionTip = false

let app
// ensures Firebase initializes before loading the app when a user refreshes a page
// auth.onAuthStateChanged(() => {
//   if(!app) {
//     app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app')
//   }
// })

// above code rewritten to make sure userData is preserved between reloads
auth.onAuthStateChanged(user => { 
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})
