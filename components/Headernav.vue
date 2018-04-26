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
.header
  background-color: #fff
  position: fixed
  top: 0
  right: 0
  left: 0
  height: 78px
  border-bottom: 1px solid #ededed
.header .header-logo
  float: left
  margin: 0 0 0 15px
  #logoimg
    width: 100px
    height: 70px
#link
  display: flex
  justify-content: center
  .router
    border-left: 1px solid #ededed
    float: left
    font-size: 18px
    line-height: 78px
    padding: 0 35px
    display: block
    color: #000
    text-decoration: none
    &:hover
      background-color: #f5f5f3
  input.box
    margin-top: 10px
    margin-bottom: 5px
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
    background-position: 10px 17px
    background-repeat: no-repeat
    padding: 12px 20px 12px 40px
    -webkit-transition: width 0.4s ease-in-out
    transition: width 0.4s ease-in-out
  input:focus
    width: 100%
</style>
