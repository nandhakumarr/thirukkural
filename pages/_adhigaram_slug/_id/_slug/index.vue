<template lang="pug">
.page
  headernav.head(:navigations="Navigation")
  main
    .kural(v-if="kural")
      h3 பால்கள் / இயல்கள்
      button.btn {{ kural.adhigaram }}
      .section
        p {{ kural.line1 }}
        p {{ kural.line2 }}
      explanation.explanation
</template>

<script>
import thirukkural from 'static/thirukkural'
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
.page
  display: flex
  > header
  > main
    flex: 1
    .kural
      width: 50rem
      margin: 3rem auto
      border: 60px solid #eee
      border-image-source: linear-gradient(#ffc371, #ffc371)
      border-image-slice: 10
      border-left: 1px solid #ffc371
      border-right: 1px solid #ffc371
      .btn
        margin: 1rem
        border-radius: none
        color: #333
        font-size: 1rem
        background: #ffc371
      > h1, h3
        color: #000
      > h3
        margin: 1rem
      > .section
        margin: 1rem
        font-size: 1.5rem
      > .explanation
        margin: 1rem
</style>

