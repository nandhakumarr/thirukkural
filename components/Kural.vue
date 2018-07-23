<template lang="pug">
.page
  .kural
    h1 nfdjnvfinov
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
