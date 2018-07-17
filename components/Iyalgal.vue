<template lang="pug">
.iyalgal
  .Chapters
    nuxt-link(v-for="(c, i) in Chapters" key="i" to="/") {{ c }}
</template>
<script>
import _ from 'lodash'

export default {
  data () {
    return {
      Chapters: [
        'பாயிரம்',
        'இல்லறவியல்',
        'துறவறவியல்',
        'ஊழியல்',
        'அரசியல்',
        'அமைச்சியல்',
        'அரணியல்',
        'கூழியல்',
        'படையியல்',
        'நட்பியல்',
        'குடியியல்',
        'களவியல்',
        'கற்பியல்',
      ],
    }
  }
}
</script>

<style lang='sass' scoped>
@import 'assets/styles/thirukkural'
.iyalgal
  display: flex
  padding: 0 $space/2
  .Chapters
    display: flex
    justify-content: space-evenly
    align-items: center
    align-content: space-evenly
    flex-direction: row
    flex-wrap: wrap
    a
      text-decoration: none
      color: #000
      border: 1px solid #c5c2c2
      padding: 2rem
      margin: 1rem
      width: 15rem
      text-align: center
</style>
