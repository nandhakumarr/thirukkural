<template lang="pug">
  nav
    div#header
      div#log
        img#logo(src="http://agaram.xyz/wp-content/uploads/2015/05/agaram-logo-min.png", alt="")
      div#link
        router-link(v-for="nav in navigations", :key="nav.url", :to="nav.url", :title="nav.title")
          button.label {{ nav.label }}
        input.box(type="search", placeholder="Search..", name="search")
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
    width: 100%
    height: 60px
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
      input.box
        margin-top: 10px
        margin-left: 400px
        outline: none
      input
        width: 130px
        box-sizing: border-box
        border: 2px solid #ccc
        border-radius: 2px
        font-size: 16px
        background-color: white
        background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-24.png')
        background-position: 10px 10px
        background-repeat: no-repeat
        padding: 12px 20px 12px 40px
        -webkit-transition: width 0.4s ease-in-out
        transition: width 0.4s ease-in-out
      input:focus
        width: 100%
</style>
