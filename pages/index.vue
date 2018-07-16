<template lang="pug">
.page
  header
    headernav.head(:navigations="Navigation")
<<<<<<< HEAD
  //-carousel
  kural
=======
  carousel
  kural.kuralgal
<<<<<<< HEAD
  Adhigaram
  card
  ui
=======
  ui
  adhigaram

>>>>>>> 62dcc44aabd419da4da37e87033ba7f8541477eb
>>>>>>> c9f64cca5a10e999ad848a34794519772b06b083
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
import Ui from '~/components/Ui.vue'
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
<<<<<<< HEAD
    Kural
=======
    Ui,
    Kural,
    Adhigaram
>>>>>>> c9f64cca5a10e999ad848a34794519772b06b083
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

