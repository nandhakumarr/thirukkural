<template lang="pug">
.kural
  h1 thirukkural
  p(v-if="kural") {{ kural.line1 }}
</template>

<script>
import thirukkural from 'static/thirukkural'
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
  }
}
</script>
