<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
    carousel
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'

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
    Carousel
  }
}
</script>

<style <style lang="sass" scoped>
@import 'assets/styles/mixins'
.container
  padding-top: 4rem
  .head
    @include fixed-top
    //- background: #f4eec0
    // -padding: 2px
    //- opacity: 0.7
    //- filter: alpha (opacity=80)
</style>

