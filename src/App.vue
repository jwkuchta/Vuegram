<template>
  <div id="app">
    <SiteNav v-if='showNav'></SiteNav>
    <router-view/>
  </div>
</template>

<script>
import SiteNav from './components/SiteNav'
import { mapState } from 'vuex'

export default {
  components: {
    SiteNav
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>