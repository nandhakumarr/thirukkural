<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
    carousel
    aside
      h4 This is aside
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
// import Card from '~/components/Card'

export default {
  data () {
    return {
      Navigation: [
        { title: "Home", label: "Home", url: 'home' },
        { title: "Content", label: "Content", url: 'Content'},
        { title: "About", label: "About", url: 'About' },
      ]
    }
  },
  components: {
    Headernav,
    Carousel,
    //- Card
  }
}

</script>

<style lang="sass" scoped>
@import 'assets/styles/mixins'
.container
  padding-top: 4rem
  width: 100%
  height: auto
  .head
    @include fixed-top
    //- background: #f4eec0
    // -padding: 2px
    //- opacity: 0.7
    //- filter: alpha (opacity=80)
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

