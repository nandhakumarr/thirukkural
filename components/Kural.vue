<template lang="pug">
div.icon.bar
  img(:src="athigaram" alt="")
  img(:src="palgal" alt="")
  img(:src="iyalgal" alt="")
</template>

<script>
export default {
data () {
  return {
    athigaram: 'https://lh3.googleusercontent.com/-cFSMNT3E4vc/Wxtq02EKDbI/AAAAAAAABxA/wPC6seKe920UVjPGqfwsg-7YCKE7gq5AACL0BGAYYCw/h82/2018-06-08.png',
    palgal: 'https://lh3.googleusercontent.com/-v_blN0TSc10/Wxtq71R2_DI/AAAAAAAABxA/2j2azTJ2Gv8yP4Z_OU3DPmLrhmotmj7dgCL0BGAYYCw/h82/2018-06-08.png',
    iyalgal: 'https://lh3.googleusercontent.com/-Xb6ntQ_Mouk/WxtrBhCl7XI/AAAAAAAABxA/xSfYifNtZhsF4afKxQV_A2dIkEyNAqCAgCL0BGAYYCw/h82/2018-06-08.png'
  }
}
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/config/typography'
@import 'assets/styles/mixins'
.icon.bar
  color:#FFF
  font-family: $font-family
  position: absolute
  top: 520px
  -webkit-transform: translateY(-50%)
  -ms-transform: translateY(-50%)
  transform: translateY(-50%)
  img
    display: block
    text-align: center
    padding: 16px
    transition: all 0.3s ease
    width: 60px
    &:hover
      background: #0E364A
      cursor: pointer
      transform: scale(1.2)
</style>