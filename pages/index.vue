<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
    headcont.section(:subject="Headcont")
    carousel
    card
</template>


<script>
import Headernav from '~/components/Headernav.vue'
import Carousel from '~/components/Carousel.vue'
import Headcont from '~/components/Headcont'
import Card from '~/components/Card'

export default {
  data () {
    return {
      Navigation: [
        { title: "Home", label: "Home", url: 'home' },
        { title: "Content", label: "Content", url: 'Content'},
        { title: "About", label: "About", url: 'About' },
      ],
      Headcont: [
        { text: 'அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.' }
      ]
    }
  },
  components: {
    Headernav,
    Carousel,
    Headcont,
    Card
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

