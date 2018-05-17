<template lang="pug">
div.header
  div.header-logo
    img#logoimg(src="https://lh3.googleusercontent.com/-lRuIypOTaLE/WubID5P9LqI/AAAAAAAABt8/0K5GgzHMGxESWx3E4xkUq33ly5Is1rAFQCK8BGAs/s100/2018-04-30.png", alt="")
  div#link
    router-link.router(v-for="nav in navigations", :key="nav.url", :to="nav.url", :title="nav.title")
      span.label {{ nav.label }}
    div#search
      input.box(type="search", placeholder="What are you looking for?", name="search")
      input.search(type="submit", value="Rechercher")
  //-iframe( width="100%" height="480" src="https://www.youtube.com/embed/A89_enDDJn0" frameborder="0" allow="autoplay encrypted-media" allowfullscreen)
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
  background-color: transparent
  box-shadow: none
  max-width: 1200px
  width: 100%
  margin: 20px auto 0
  padding: 0 24px
.header .header-logo
  float: left
  margin: 0 320px 0 15px
  #logoimg
    width: 100px
    height: 70px
#link
  display: block
  justify-content: center
  .router
    border-left: 1px solid #ededed
    float: left
    font-size: 18px
    line-height: 78px
    padding: 0 35px
    display: inline-block
    color: #000
    text-decoration: none
    &:hover
      background-color: #f5f5f3
  #search
    margin: 10px 30px
    display: inline-block
    position: relative
    float: right
    padding: 0
    input.box
      height: 60px
      font-size: 15px
      display: inline-block
      font-weight: 50
      border: none
      outline: none
      color: #555
      padding: 3px
      padding-right: 60px
      width: 0px
      position: absolute
      top: 0
      right: 0
      background: none
      z-index: 3
      transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000)
      cursor: pointer
    input:focus
      width: 280px
      z-index: 1
      border-bottom: 1px solid #BBB
      cursor: text
    input:focus:hover
      border-bottom: 1px solid #BBB q
    input.search
      height: 60px
      width: 63px
      display: inline-block
      color:red
      float: right
      background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-24.png') center center no-repeat
      text-indent: -10000px
      border: none
      position: absolute
      top: 0
      right: 0
      z-index: 2
      cursor: pointer
      opacity: 0.4
      cursor: pointer
      outline: none
      transition: opacity .4s ease
    input.search:hover
      opacity: 0.8

</style>
