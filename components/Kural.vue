<template lang="pug">
.page.kural
  .container
    .athigaram
      nuxt-link(to="/athigaram") 133 அதிகாரங்கள்
    .palgal
      nuxt-link(to="/palgal") 3 பால்கள்
    .iyalgal
      nuxt-link(to="/iyalgal") 13 இயல்கள்
  .container
    nuxt-link(to="/kuralLink(Number)" v-for="kural in thirukkural" key="kural")
      h3 {{ kural.Line1 }}
      h3 {{ kural.Line2 }}
</template>

<script>
import Thirukkural from 'static/thirukkural'
export default {
data () {
  return {
    thirukkural: Thirukkural
  }
},
methods: {
  kuralLink (num) {
    return '/kuraldetail' + num
  }
}
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.page.kural
  margin: 0
  padding: 0
  .container
    margin: 1rem
    a
      margin: 0 1rem
      text-decoration: none
      h3
        color: $black
</style>