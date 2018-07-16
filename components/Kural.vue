<template lang="pug">
.kural
  .container
    .athigaram
      nuxt-link(to="/athigaram") 133 அதிகாரங்கள்
    .palgal
      nuxt-link(to="/palgal") 3 பால்கள்
    .iyalgal
      nuxt-link(to="/iyalgal") 13 இயல்கள்
</template>

<script>
export default {
data () {
  return {

  }
}
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.container
  display: flex
  justify-content: space-evenly
  margin: 3rem
  align-items: center
  .athigaram, .palgal, .iyalgal
    border: 1px solid #ccc
    padding: $space
    a
      text-decoration: none
      color: #000
</style>