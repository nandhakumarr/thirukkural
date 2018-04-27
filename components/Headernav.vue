<template lang="pug">
div.header
  div.header-logo
    img#logoimg(src="https://lh3.googleusercontent.com/-kvwrkoXO-Wk/WuLxl4ygefI/AAAAAAAABtI/ay84BvBdoAY9bPcUEa1oDTuZJl5daKikgCK8BGAs/s100/2018-04-27.png", alt="")
  div#link
    router-link.router(v-for="nav in navigations", :key="nav.url", :to="nav.url", :title="nav.title")
      span.label {{ nav.label }}
    input.box(type="search", placeholder="Search..", name="search")
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
￼Home
￼Content
￼About
￼
Search..
அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.
HIII

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
