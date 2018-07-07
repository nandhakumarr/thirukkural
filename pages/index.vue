<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
      headcont
    carousel
    card
    Ui
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
import Card from '~/components/Card.vue'
import Ui from '~/components/Ui.vue'

export default {
  data () {
    return {
      Navigation: [
        { title: "Home", label: "Home", url: '#' },
        { title: "Content", label: "Content", url: '#'},
        { title: "About", label: "About", url: '#' },
        { title: "Login", label: "Login", url: '#' },
        { title: "Signup", label: "Signup", url: '#' }

      ]
    }
  },
components: {
    Headernav,
    Carousel,
    Card,
    Ui
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
</style>

