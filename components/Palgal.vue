<template lang="pug">
.palgal
  .Chapters
    nuxt-link(v-for="(c, i) in Chapters" key="i" to="/") {{ c }}
</template>
<script>
import _ from 'lodash'

export default {
  data () {
    return {
      Chapters: [
        'அறத்துப்பால்',
        'பொருட்பால்',
        'காமத்துப்பால்'
      ],
    }
  }
}
</script>

<style lang='sass' scoped>
@import 'assets/styles/thirukkural'
.palgal
  display: flex
  padding: 0 $space/2
  .Chapters
    display: flex
    justify-content: space-evenly
    align-items: center
    align-content: space-evenly
    flex-direction: row
    flex-wrap: wrap
    margin-left: 10rem
    a
      text-decoration: none
      color: #000
      border: 1px solid #c5c2c2
      padding: 2rem
      margin: 1rem
      width: 15rem
      text-align: center
</style>
