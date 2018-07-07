<template lang="pug">
div.icon.bar
  a(href="" class="tooltip")
    img(:src="athigaram" alt="")
    span 133 அதிகாரங்கள்
  a(href="" class="tooltip")
    img(:src="palgal" alt="")
    span 3 பால்கள்
  a(href="" class="tooltip")
    img(:src="iyalgal" alt="")
    span 13 இயல்கள்
</template>

<script>
import { MdTooltip } from 'vue-material/dist/components'
export default {
name: 'Direction',
data () {
  return {
    athigaram: 'https://lh3.googleusercontent.com/-cFSMNT3E4vc/Wxtq02EKDbI/AAAAAAAABxA/wPC6seKe920UVjPGqfwsg-7YCKE7gq5AACL0BGAYYCw/h82/2018-06-08.png',
    palgal: 'https://lh3.googleusercontent.com/-v_blN0TSc10/Wxtq71R2_DI/AAAAAAAABxA/2j2azTJ2Gv8yP4Z_OU3DPmLrhmotmj7dgCL0BGAYYCw/h82/2018-06-08.png',
    iyalgal: 'https://lh3.googleusercontent.com/-Xb6ntQ_Mouk/WxtrBhCl7XI/AAAAAAAABxA/xSfYifNtZhsF4afKxQV_A2dIkEyNAqCAgCL0BGAYYCw/h82/2018-06-08.png'
  }
},
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/config/typography'
@import 'assets/styles/mixins'
.icon.bar
  color:#FFF
  font-family: $font-family
  position: absolute
  -webkit-transform: translateY(-50%)
  -ms-transform: translateY(-50%)
  transform: translateY(-50%)
  display: flex
  flex-direction: column
  align-items: flex-start
  align-content: flex-start
  justify-content: flex-start
  left: 80px
  top: 320px
    //-&:hover
    //-  background: #0E364A
    //-  cursor: pointer
    //-  transform: scale(1.2)
  .tooltip
    position: relative
    z-index: 20
    left: -80px
    transition: 0.3s
    padding: 15px
    width: 100px
    text-decoration: none
    font-size: 20px
    color: white
    border-radius: 0 5px 5px 0
    img
      width: 50px
    span
      display: none
    &:hover
      z-index: 24
      span
        display: block
        width: 100px
        height: 30px
        padding: 5px
        left: 60px
        bottom: 0px
        background: #000
        color: #FFF
        font-size: 10px
        position: absolute

</style>