<template lang="pug">
main.cards
  article.card
    img(src="https://cdn.soft112.com/thirukkural-audio/00/00/0G/HN/00000GHN8J/pad_screenshot_240x180.png" alt="Sample photo")
    div.text
      h3  hii
      p Welcome
  article.card
    img( src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPV8-bbsneUrLpW2x25O1S8pw7LlMYS27kYKicjcFyBUz1MocC" alt="Sample photo")
    div.text
      h3  Hello
      p mmrmgpotgpok
  article.card
    img(src="https://content3.jdmagicbox.com/comp/chennai/f3/044pxx44.xx44.171212135912.r3f3/catalogue/thirukkural-unavagam-restaurant-chennai-iudv3.jpg" alt="Sample photo")
    div.text
      h3  mzklgmlkrmgiot
      p vnfingoitnoijtoi
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.cards
  display: flex
  flex-wrap: wrap
  align-items: stretch
  .card
    flex: 0 0 250px
    margin: 100px 70px
    border: 1px solid #ccc
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3)
  .card img
    max-width: 100%
    width: -webkit-fill-available
  .card .text
    padding: 0 20px 20px
  .card .text > button
    background: gray
    border: 0
    color: white
    padding: 10px
    width: 100%
</style>
