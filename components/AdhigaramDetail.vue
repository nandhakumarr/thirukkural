<template lang="pug">
.page
  headernav.head
  .adhigaramdetail
    h1.adhigaramdetail(v-if="adhigaramdetail")
      | {{ adhigaramdetail.Line1 }}
      br
      | {{ adhigaramdetail.Line2 }}

</template>

<script>
import Headernav from '@/components/Headernav'
export default {
  props: ['adhigaramdetail'],
  mounted () {
  },
  components: {
    Headernav
  }
}
</script>

<style lang="sass">
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
.page, .adhigaramdetail
  padding-top: 2rem
  h1
    color: #333
  p
    margin: 1rem
</style>
