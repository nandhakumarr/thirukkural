<template lang="pug">
.page
  .explanation
    .carousel
      span.dot(class="active" @click="show = !show")
        div(v-if="show")
          .author மு.வரதராசனார்
          h2
            | எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.
      span.dot(@click="show = !show")
        //-div(v-if="show")
          .author சாலமன் பாப்பையா
          h2
            | எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.
      span.dot(@click="show = !show")
        //-div(v-if="show")
          .author மு.கருணாநிதி
          h2
            | அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை.
</template>

<script>
import Thirukkural from 'static/thirukkural'
export default {
  data(){
    return{
      thirukkural: Thirukkural,
      show: false
    }
  },
  methods:{

  }

}
</script>

<style lang="sass" scoped>
.slides
  max-width: 800px
  position: relative
  margin: auto
  .slider-enter-active, .slider-leave-active
    transition: opacity .3s ease
  .slider-enter, .slider-leave-to
    opacity: 0
.carousel
  display: flex
  flex-direction: row
.dot
  cursor: pointer
  height: 15px
  width: 15px
  margin: 0 2px
  background-color: #bbb
  border-radius: 50%
  display: inline-block
  &.active
  &:hover
    background-color: #ca2323
</style>
