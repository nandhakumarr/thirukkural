<template lang="pug">
.page
  headernav.head
  .kuraldetail
    h1.kural(v-if="kural")
      | {{ kural.Line1 }}
      br
      | {{ kural.Line2 }}
    h3 மு.வ உரை:
    p {{ kural.mv }}
    h3 சாலமன் பாப்பையா உரை:
    p {{ kural.sp }}
    h3 கலைஞர் உரை:
    p {{ kural.mk }}
</template>

<script>
import Headernav from '@/components/Headernav'
export default {
  props: ['kural'],
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
.page, .kuraldetail
  padding-top: 2rem
  h1
    color: #333
  p
    margin: 1rem
</style>
