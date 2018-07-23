<template lang="pug">
.page
  header
    headernav.head
  vilakkam  
</template>


<script>
import Headernav from '~/components/Headernav'
import Vilakkam from '~/components/Vilakkam'

export default {
  data () {
    return {
      Navigation: [

      ]
    }
  },
  components: {
    Headernav,
    Vilakkam
  }
}

</script>

<style lang="sass">
@import 'assets/styles/thirukkural'
.page
  display: flex
</style>

