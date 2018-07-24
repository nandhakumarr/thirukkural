<template lang="pug">
.page
  header
    headernav.head
</template>


<script>
import Headernav from '~/components/Headernav'

export default {
  data () {
    return {
      Navigation: [

      ]
    }
  },
  components: {
    Headernav
  }
}

</script>

<style lang="sass">
@import 'assets/styles/thirukkural'
.page
  display: flex
</style>

