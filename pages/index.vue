<template lang="pug">
<<<<<<< HEAD
  section.container
    header
      headernav.head(:navigations="Navigation")
      headcont
    carousel
    card
    Ui
=======
section.container
  header
    headernav.head(:navigations="Navigation")
  carousel
  kural.kuralgal
  Adhigaram
>>>>>>> a0e8ce9bb7898e1ba190d3ae153859ec1f8ad06f
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
<<<<<<< HEAD
import Card from '~/components/Card.vue'
import Ui from '~/components/Ui.vue'

=======
import Kural from '~/components/Kural.vue'
import Adhigaram from '~/components/Adhigaram.vue'
>>>>>>> a0e8ce9bb7898e1ba190d3ae153859ec1f8ad06f
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
    Card,
    Ui
=======
    Kural,
    Adhigaram
>>>>>>> a0e8ce9bb7898e1ba190d3ae153859ec1f8ad06f
  }
}

</script>

<style lang="sass" scoped>
@import 'assets/styles/mixins'
@import 'assets/styles/config/typography'
body
  font-family: $font-family
  color: #FFF
.container
  padding-top: 4rem
  width: 100%
  .head
    @include fixed-top
    //- background: #f4eec0
    // -padding: 2px
    //- opacity: 0.7
    //- filter: alpha (opacity=80)
    margin: auto;
    z-index: 10000;
    /* padding: 2rem 0; */
    background: #FFFFFF;
    border-bottom: 1px solid rgba(225, 229, 232, 0.5);
    box-shadow: 0 0.25rem 1rem 0.15rem rgba(152, 150, 150, 0.1);
    transition: all 0.2s;
  aside
    background: #fff
    float: right
    height: 700px
    width: 18rem
    border-left: 1px solid #EEE
    h4
      color: #8c8475
      padding: 25px
      text-align: center
</style>

