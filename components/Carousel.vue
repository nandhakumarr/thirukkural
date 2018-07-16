<template lang="pug">
div.content
  div.kural
    h3 தினம் ஒரு குறள்
    p(v-for="slider in slides") {{ slider.Line1 }} {{ slider.Line2 }}
  div.vilakam
    a(@click="showModal = true") பொருள் விளக்கம்
    modal(v-if="showModal" @close="showModal = false")
</template>

<script>
import Thirukkural from 'static/thirukkural'
import Modal from './Modal.vue'
export default {
  data () {
    return {
      showModal: false,
      slides: Thirukkural
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'

</style>
