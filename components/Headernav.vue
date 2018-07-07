<template lang="pug">
div.header
  div.header-logo
    img#logoimg(:src="logo", alt="")
    //- div#link
      router-link.router(v-for="nav in navigations", :key="nav.url", :to="nav.url", :title="nav.title")
        span.label {{ nav.label }}
  //-div.search
    input(type="search", placeholder="தேடல்")
  //-iframe( width="100%" height="480" src="https://www.youtube.com/embed/A89_enDDJn0" frameborder="0" allow="autoplay encrypted-media" allowfullscreen)
  div.social
    img#medialogo(:src="facebook", alt="")
    img#medialogo(:src="twitter", alt="")
    img#medialogo(:src="instagram", alt="")
    img#medialogo(:src="linkedIn", alt="")
</template>

<script>
export default {
  props: ['navigations'],
  data () {
    return {
      logo: 'https://lh3.googleusercontent.com/-ElZXixJm1sI/WubHL4AdYeI/AAAAAAAABt4/MkgVr6z-65kCQLGtcCIhz_EQS0sEkDQqACL0BGAYYCw/h80/2018-04-30.png',
      facebook: 'http://www.ssccardinals.org/assets/images/Images/Social-Media-Icons/Facebook-Icon.png',
      twitter: 'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png',
      instagram: 'http://pngimg.com/uploads/instagram/instagram_PNG3.png',
      linkedIn: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png'
    }
  }
}
</script>
<<<<<<< HEAD

￼
Search..
அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.
HIII
=======
>>>>>>> a0e8ce9bb7898e1ba190d3ae153859ec1f8ad06f

<style lang="sass" scoped>
@import 'assets/styles/config/typography'
.header
  border-bottom: 1px solid #EEE
  width: 100%
  margin: 20px auto 0
  padding: 0 24px
.header .header-logo
  float: left
<<<<<<< HEAD
  margin: 0 120px 0 15px
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
    float: left
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
      border-bottom: 1px solid #BBB
    input.search
      height: 60px
      width: 63px
      display: inline-block
      float: left
      background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-24.png') center center no-repeat
      text-indent: -10000px
      border: none
      position: absolute
      top: 0
      right: 0
      z-index: 2
      cursor: pointer
      opacity: 0.4
=======
  padding: 30px
  #logoimg
    width: 90px
    height: 50px
.search
  width: 300px
  display: flex
  margin-top: 22px
  margin-left: 280px
  border-bottom: 1px solid #EEE
  font-family: $font-family

input
  outline: none
  &[type=search]
  -webkit-appearance: textfield
  -webkit-box-sizing: content-box
  font-size: 100%
  &::-webkit-search-decoration, &::-webkit-search-cancel-button
    display: none
  &[type=search]
    background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-24.png') no-repeat 9px center
    border: none
    padding: 9px 10px 9px 50px
    width: 125px
    -webkit-transition: all .5s
    -moz-transition: all .5s
    transition: all .5s
    &:focus
      width: 240px
      outline: none
      background-color: #fff
      border-bottom: 1px solid #EEE
>>>>>>> a0e8ce9bb7898e1ba190d3ae153859ec1f8ad06f
      cursor: pointer
  &:-moz-placeholder, &::-webkit-input-placeholder
    color: #999
    border-bottom: 1px solid #EEE
.social
  display: flex
  flex-direction: row
  align-items: flex-end
  justify-content: flex-end
  align-content: end
  margin: 39px
  #medialogo
    width: 30px
    height: 30px
    cursor: pointer
</style>
