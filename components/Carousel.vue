<template lang="pug">
div.content
  h3 தினம் ஒரு குறள்
  div.kural
    p அகர முதல எழுத்தெல்லாம் ஆதி
    p பகவன் முதற்றே உலகு
  div.vilakam
    a(@click="showModal = true") பொருள் விளக்கம்
    modal(v-if="showModal" @close="showModal = false")
</template>

<script>
import Modal from './Modal.vue'
export default {
  data () {
    return {
      showModal: false
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/config/typography'
.content
  font-family: $font-family
  margin-top: 130px
  h3
    font-family: $heading-font
    margin-top: 100px
    margin-left: 200px
    font-size: $heading-font-size
    font-weight: 600
    color: #000
  .kural
    line-height: 38px
    p
      color: #000
      margin-left: 200px
      margin-top: 20px
      font-size: $paragraph-font-size
  .vilakam
    margin-top: 50px
    a
      background: #3AA7D7
      margin-left: 200px
      padding: 10px
      color: #FFF
      cursor: pointer
    .modal-mask
      position: fixed
      z-index: 9998
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, .5)
      display: table
      transition: opacity .3s ease
      border-bottom: 1px solid #EEE
      h4
        font-family: $heading-font
    .modal-enter
      opacity: 0
    .modal-leave-active
      opacity: 0
    .modal-enter .modal-container,
    .modal-leave-active .modal-container
      -webkit-transform: scale(1.1)
      transform: scale(1.1)
</style>
