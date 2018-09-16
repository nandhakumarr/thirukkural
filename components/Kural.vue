<template lang="pug">
.kural(v-if="kural")
  .navigation
    nuxt-link.previous(:to="`/kural/${prev()}`") 
      button Prev
    nuxt-link.next(:to="`/kural/${next()}`") 
      button Next
    nuxt-link.random(:to="`/kural/${random()}`") 
      button Random  
  .kural-details
    .kural-number    
      h3 குறள் எண்:  {{ kural.id  }}
    .adhigaram
      h3 அதிகாரம் :  {{ kural.adhigaram }}
    .paal  
      h3 பால்   : {{ kural.paal }}  
    .iyal  
      h3 இயல்  : {{ kural.iyal }}
  .section
    p {{ kural.line1 }}
    p {{ kural.line2 }}
  explanation
</template>

<script>
import Explanation from '~/components/Explanation'
export default {
  props: ['kural'],
  methods: {
    random() {
      return Math.floor((Math.random() * 1330) + 1)
    },
    prev() {
      return this.kural.id === 1
      ? 1330
      : (this.kural.id - 1)
    },
    next() {
      return this.kural.id === 1330
      ? 1
      :  (this.kural.id + 1)
    }
  },
  components: {
    Explanation
  }
}
</script>

<style lang="sass" scoped>
$position: 2rem
.kural
  .navigation
    font-size: $position/2
    display: flex
    justify-content: flex-end
    button  
      margin-right: $position/4
  .kural-details
    display: flex
    justify-content: space-between   
    .kural-number
      h3
        color : #fb8679
    .adhigaram
      h3
        color: #fdb459
    .paal
      h3
        color: #7c7afb
    .iyal
      h3
        color: #52b3f7
     
  
      
</style>


