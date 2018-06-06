<template lang="pug">
section.container
  header
    headernav.head(:navigations="Navigation")
  carousel
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
@import 'assets/styles/mixins'
@import 'assets/styles/config/typography'
body
  font-family: $font-family
  color: #FFF
.container
  background-image: url('https://lh3.googleusercontent.com/-Rae6L03AIyY/WxTT-jV5xzI/AAAAAAAABwI/LDNm52FDlLQDyvDOMt0UsNpWjPPRIXHCQCL0BGAYYCw/h3641/2018-06-03.jpg')
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

