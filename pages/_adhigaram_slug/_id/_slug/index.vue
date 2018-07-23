<template lang="pug">
.page
  headernav.head(:navigations="Navigation")
  main
    .kural(v-if="kural")
      h3 {{ kural.adhigaram }}
      br
      p {{ kural.line1 }}
      p {{ kural.line2 }}
</template>

<script>
import thirukkural from 'static/thirukkural'
import Headernav from '~/components/Headernav'

import _ from 'lodash'
import { mapState } from 'vuex'

export default {
  fetch ({ store, params }) {
    console.log(params.adhigaram_slug)
    store.commit('setKural',thirukkural)
    store.commit('setKuralByAdhigaram', params.adhigaram_slug)
  },
  computed: {
    kural () {
      return this.$store.state.kural
    }
  },
  components: {
    Headernav
  }
}
</script>

<style lang="sass" scoped>
.page
  display: flex
  > header
  > main
    flex: 1
    .kural
      margin: 4rem 1rem
</style>

