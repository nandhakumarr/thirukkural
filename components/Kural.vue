<template lang="pug">
div.container
  a(class="athigaram") 133 அதிகாரங்கள்
  a(class="palgal") 3 பால்கள்
  a(class="iyalgal") 13 இயல்கள்
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import 'assets/styles/config/typography'
.container
  color:#FFF
  font-family: $font-family
  display: flex
  flex-direction: row
  justify-content: space-evenly
  align-items: center
  padding: 50px
  margin-left: -25px
  .athigaram
    border: 1px solid #FFF
    padding: 10px 30px
    cursor: pointer
    color: #FFF
    &:hover
      background: #FFF
      color: #000
  .palgal
    border: 1px solid #FFF
    padding: 10px 30px
    cursor: pointer
    color: #FFF
    &:hover
      background: #FFF
      color: #000
  .iyalgal
    border: 1px solid #FFF
    padding: 10px 30px
    cursor: pointer
    color: #FFF
    &:hover
      background: #FFF
      color: #000
</style>