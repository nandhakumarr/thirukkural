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
    //-explanation.explanation
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
      font-size: 2rem
      text-align: left
      max-width: 60rem
      margin: 6rem auto 6rem auto
      padding: 1rem
      > h3
        color: #000
      .btn
        padding: 0.5rem
        margin-top: 1rem
        background: #eee
        color: #000
        &:hover
          background: #333333
          color: #fff
    .section
      p
        margin-top: 2rem
</style>

