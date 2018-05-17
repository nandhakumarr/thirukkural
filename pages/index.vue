<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
<<<<<<< HEAD
=======
      headcont
>>>>>>> c8f699b941bc0edb15ce0a98d95e112d8495b881
    carousel
    aside
      h4 This is aside
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
<<<<<<< HEAD
// import Card from '~/components/Card'
=======
import Card from '~/components/Card.vue'
>>>>>>> c8f699b941bc0edb15ce0a98d95e112d8495b881

export default {
  data () {
    return {
      Navigation: [
<<<<<<< HEAD
        { title: "Home", label: "Home", url: 'home' },
        { title: "Content", label: "Content", url: 'Content'},
        { title: "About", label: "About", url: 'About' },
=======
        { title: "Home", label: "Home", url: '#' },
        { title: "Content", label: "Content", url: '#'},
        { title: "About", label: "About", url: '#' },
        { title: "Login", label: "Login", url: '#' },
        { title: "Signup", label: "Signup", url: '#' }

>>>>>>> c8f699b941bc0edb15ce0a98d95e112d8495b881
      ]
    }
  },
components: {
    Headernav,
    Carousel,
<<<<<<< HEAD
    //- Card
=======
    Card
>>>>>>> c8f699b941bc0edb15ce0a98d95e112d8495b881
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

