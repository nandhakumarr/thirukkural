<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
    headcont.section(:subject="Headcont")
</template>


<script>
import Headernav from '~/components/Headernav'
import Headcont from '~/components/Headcont'

export default {
  data () {
    return {
      Navigation: [
        { title: "Home", label: "Home", url: 'home' },
        { title: "About", label: "About", url: 'about' },
        { title: "Services", label: "Services", url: 'services' },
        { title: "Products", label: "Products", url: 'products' }
      ],
      url: './assets/agaram-logo.png',
      Headcont: [
        { text: 'அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.' }
      ] 
    }
  },
  components: {
    Headernav,
    Headcont
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
    background: #f4eec0
    padding: 2px
    //- opacity: 0.7
    //- filter: alpha (opacity=80)
</style>

