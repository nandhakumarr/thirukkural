<template lang="pug">
.page
  headernav.head(:navigations="Navigation")
  main
    .kural(v-if="kural")
      .adhigaram
        h3 {{ kural.paal }} / {{ kural.iyal }}
        h3 {{ kural.adhigaram }}
      .section
        p {{ kural.line1 }}
        p {{ kural.line2 }}
        
      explanation
</template>

<script>
import thirukkural from 'static/kural'
import Headernav from '~/components/Headernav'
import Explanation from '~/components/Explanation'

import _ from 'lodash'
import { mapState } from 'vuex'

export default {
  fetch ({ store, params }) {
    store.commit('setKural',thirukkural)
    store.commit('setKuralByAdhigaram', params.adhigaram_slug)
    return params
  },
  computed: {
    kural () {
      return this.$store.state.kural
    }
  },
  components: {
    Headernav,
    Explanation
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'

.page
  display: flex
  > header
  > main
    background: linear-gradient(to bottom right,  #f9d423 0%, #ff4e50 100%)
    flex: 1
    .kural
      font-size: 2rem
      text-align: left
      max-width: 60rem
      margin: 6rem auto 6rem auto
      padding: 3rem
      background: #FFF
      color: #000
      border: 1px solid #EEE
      box-shadow: 0 0 0.25rem 0.125rem rgba($neutral, 0.2)
      .adhigaram
        display: flex
        justify-content: space-between
    .section
      word-spacing: 0.7rem
      p
        margin-top: 2rem
        font-weight: bold
      img
        margin-left: 700px
</style>

