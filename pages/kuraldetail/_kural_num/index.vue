<template lang="pug">
  .kural
    .div(v-if="kural")
       
      | {{ kural.Line1 }}


</template>

<script>
import thirukkural from 'static/thirukkural.json'
import _ from 'lodash'
export default {
    
  data () {
    return {
       
      kural: {
        Line1:''
      }
    }
  },

  mounted () {
    const id = this.$route.params.kural_num
   // this.kural = _.find(thirukkural, { 'Number': id })
    console.log(id)
    this.kural.Line1= id
  }
}
</script>
