<template lang="pug">
.page
  headernav.head
  palgal
</template>

<script>
import Headernav from '@/components/Headernav'
import Palgal from '@/components/Palgal'
export default {
  data () {
    return {

    }
  },
  components: {
    Palgal,
    Headernav
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.page
  .head
    @include fixed-top
    margin: auto
    z-index: 10000
    /* padding: 2rem 0 */
    background: #FFFFFF
    border-bottom: 1px solid rgba(225, 229, 232, 0.5)
    box-shadow: 0 0.25rem 1rem 0.15rem rgba(152, 150, 150, 0.1)
    transition: all 0.2s
</style>
