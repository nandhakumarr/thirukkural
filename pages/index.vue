<template lang="pug">
  section.container
    header
      headernav.head(:navigations="Navigation")
</template>


<script>
import Headernav from '~/components/Headernav.vue'

export default {
  data () {
    return {
      Navigation: [
        { title: "Home", label: "Home", url: 'home' },
        { title: "About", label: "About", url: 'about' },
        { title: "Services", label: "Services", url: 'services' },
        { title: "Products", label: "Products", url: 'products' }
      ],
      url: './assets/agaram-logo.png'
    }
  },
  components: {
    Headernav
  }
}
</script>

<style <style lang="sass" scoped>
@import 'assets/styles/mixins'
.container
  padding-top: 4rem
  .head
    @include fixed-top
    background: #f4eec0
    padding: 2px
</style>

