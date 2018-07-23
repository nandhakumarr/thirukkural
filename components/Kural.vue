<template lang="pug">
.page
  .kural
     nuxt-link(:to="kura(kural.id)" v-for="kural in thirukkural" key="kural")
        h2 {{ kural.adhigaram }}
        h3 {{ kural.line1 }}
        h3 {{ kural.line2 }}
        a(href='Vilakkam') Vilakkam &nbsp&nbsp
        a(href='Share') Share
      
</template>

<script>
import Thirukkural from 'static/thirukkural' 
export default {
  data(){
    return{
      thirukkural: Thirukkural
    }
  },
  methods:{
    kura (i) {
        return '/kurals/' + i
    }
  }

}
</script>

<style lang="sass" scoped>
a
 text-decoration: none
</style>
