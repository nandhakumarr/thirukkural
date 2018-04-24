<template lang="pug">
  nav
    div#header
      div#log
        img#logo(src="http://agaram.xyz/wp-content/uploads/2015/05/agaram-logo-min.png", alt="")
        div#link
          router-link(v-for="nav in navigations", :key="nav.url", :to="nav.url", :title="nav.title")
            button.label {{ nav.label }}
          input#box(type="text", placeholder="Search..", name="search")
</template>

<script>
export default {
  props: ['navigations'],
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
nav
  #header
    height: 70px
    #logo
      width: 100px
      height: 50px
      float: left
    #link
      display: flex
      justify-content: center
      .label
        border: 1px solid #61b292
        border-radius: 2px
        margin: 10px
        background: #fff
        padding: 10px
        &:hover
          background: #61b292
          color: #fff
      #box
        padding: 10px
        margin: 10px 15px
</style>
