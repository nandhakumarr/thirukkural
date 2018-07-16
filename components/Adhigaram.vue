<template lang="pug">
div.athigaram
  div(v-for="data in myJson")
    h2 {{ data.Line1 }}
    h2 {{ data.Line2 }}
    p
      nuxt-link(:to="kuralLink(data.Number)") Details

</template>
<script>
import Thirukkural from 'static/thirukkural.json';
export default {
  data () {
    return {
      myJson: Thirukkural,
     
    }
  },
  methods:{
    kuralLink (num) {
      return '/kuraldetail/' + num
    }
  }
}
</script>

<style lang="sass" scoped>
.athigaram
  margin: 1rem
  h2
    margin: 1rem
</style>
