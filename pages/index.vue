<template lang="pug">
.page
  header
    headernav.head(:navigations="Navigation")
  //-carousel
  kural
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
import Kural from '~/components/Kural.vue'
export default {
  data () {
    return {
      Navigation: [

      ]
    }
  },
components: {
    Headernav,
    Carousel,
    Kural
  }
}

</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.page
  .head
    @include fixed-top
    //- background: #f4eec0
    // -padding: 2px
    //- opacity: 0.7
    //- filter: alpha (opacity=80)
    margin: auto
    z-index: 10000
    /* padding: 2rem 0 */
    background: #FFFFFF
    border-bottom: 1px solid rgba(225, 229, 232, 0.5)
    box-shadow: 0 0.25rem 1rem 0.15rem rgba(152, 150, 150, 0.1)
    transition: all 0.2s
    h4
      color: #8c8475
      padding: 25px
      text-align: center
</style>

