<template lang="pug">
section
  div#content
    div.kural
      router-kural(v-for="sub in subject", :key="sub")
        h1 {{ sub.text }}
</template>

<script>
export default {
  props: ['subject'],
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
section
  #content
    width: 100%
    height: 60px
    .kural
      margin: 50px auto
      h1
      text-align: center
      color: #565866
      font-size: 30px
      line-height: 50px
</style>