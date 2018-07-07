<template lang="pug">
transition(name="modal")
  div.modal-mask
    div.modal-wrapper
      div.modal-container
        div.modal-body
          h3 {{ urai1 }}
          p {{ vilakam1 }}
          h3 {{ urai2 }}
          p {{ vilakam2 }}
          h3 {{ urai3 }}
          p {{ vilakam3 }}
        a(href="#" class="close" @click="$emit('close')")
</template>

<script>
export default {
  data () {
    return {
       urai1: 'மு.வ உரை:',
       urai2: 'சாலமன் பாப்பையா உரை:',
       urai3: 'கலைஞர் உரை:',
       vilakam1: 'எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.',
       vilakam2: 'எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.',
       vilakam3: 'அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை'
    }
  }
}
</script>

<style lang="sass" scoped>
.modal-wrapper
  display: table-cell
  vertical-align: middle
  .modal-container
    width: 560px
    height: 300px
    margin: 0px auto
    padding: 20px 30px
    background-color: #fff
    color: #000
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
    transition: all .3s ease
    font-family: Helvetica, Arial, sans-serif
    border-bottom: 1px solid #EEE
    .modal-body
      margin: 10px 0
      font-size: 16px
      line-height: 24px
      p
        margin-left: 20px
      input
        outline: none
        border: 1px solid #EEE
    .close
      position: absolute
      right: 385px
      top: 183px
      width: 20px
      height: 20px
      opacity: 0.7
      &:hover
        opacity: 1
    .close:before, .close:after
      position: absolute
      left: 15px
      content: ' '
      height: 30px
      width: 2px
      background-color: #3AA7D7
    .close:before
      transform: rotate(45deg)
    .close:after
      transform: rotate(-45deg)

</style>
