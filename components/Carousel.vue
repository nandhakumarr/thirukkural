<template lang="pug">
div.content
  div.carousel
    <!-- carousel controls -->
    input( type="radio" name="carousel" id="carousel-1" checked )
    input( type="radio" name="carousel" id="carousel-2" )
    input(type="radio" name="carousel" id="carousel-3")
    input( type="radio" name="carousel" id="carousel-4")
    <!-- carousel navigation -->
    div.carousel-nav
      label( for="carousel-1")
      label( for="carousel-2")
      label( for="carousel-3")
      label( for="carousel-4")
    <!-- carousel slides -->
    div.carousel-slides
      div.carousel-inner
        div.carousel-item(style="background-color: #850000")
          div.center
            div.title
              | குறள் 1:
              br
              | அகர முதல எழுத்தெல்லாம் ஆதி
              br
              | பகவன் முதற்றே உலகு.
        div.carousel-item(style="background-color: #24529c")
          div.center
            div.title Keerthi
        div.carousel-item(style="background-color: #268435")
          div.center
            div.title Welcome
        div.carousel-item(style="background-color: #7a0880")
          div.center
            div.title To  my page
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.content
  position: relative
  top: 79px
  right: 0
  left: 0
  bottom: 0
  .carousel
    height: 500px
  .carousel .carousel-slides,
  .carousel .carousel-inner,
  .carousel .carousel-item
    height: 100%
  .carousel .carousel-item
    background-repeat: no-repeat
    background-position: center
    -webkit-background-size: cover
      -moz-background-size: cover
        -o-background-size: cover
            background-size: cover
    position: relative
  .carousel .carousel-item .center
    width: 100%
    height: 100%
    display: table
    text-align: center
    position: relative
  .carousel
    position: relative
  .carousel input[name=carousel]
    display: none
  .carousel .carousel-nav
    position: absolute
    bottom: 50px
    left: 0
    right: 0
    text-align: center
    z-index: 1
    label
      display: inline-block
      margin: 0 10px
      width: 20px
      height: 20px
      border: 2px solid #fff
      -webkit-border-radius: 50%
        -moz-border-radius: 50%
              border-radius: 50%
      cursor: pointer
      -webkit-transition: background-color 0.25s
      -moz-transition: background-color 0.25s
      -o-transition: background-color 0.25s
      transition: background-color 0.25s
  .carousel #carousel-1:checked ~ .carousel-nav label[for=carousel-1]
    background-color: #fff
  .carousel #carousel-2:checked ~ .carousel-nav label[for=carousel-2]
    background-color: #fff
  .carousel #carousel-3:checked ~ .carousel-nav label[for=carousel-3]
    background-color: #fff
  .carousel #carousel-4:checked ~ .carousel-nav label[for=carousel-4]
    background-color: #fff
  .carousel .carousel-slides
    width: 100%
    overflow: hidden
  .carousel .carousel-slides .carousel-inner
    width: 400%
    -webkit-transition: margin 1s
    -moz-transition: margin 1s
    -o-transition: margin 1s
    transition: margin 1s
  .carousel .carousel-slides .carousel-item
    float: left
    width: 25%
  .carousel .carousel-item .center .title
    display: table-cell
    vertical-align: middle
    color: #fff
    font-size: 50px
    height: 100px
    font-weight: 700
    letter-spacing: 10px
    text-transform: uppercase
    background-color: rgba(0, 0, 0, 0.3)
  .carousel #carousel-1:checked ~ .carousel-slides .carousel-inner
    margin-left: 0%
  .carousel #carousel-2:checked ~ .carousel-slides .carousel-inner
    margin-left: -100%
  .carousel #carousel-3:checked ~ .carousel-slides .carousel-inner
    margin-left: -200%
  .carousel #carousel-4:checked ~ .carousel-slides .carousel-inner
    margin-left: -300%
</style>
