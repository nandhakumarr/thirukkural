<template lang="pug">
.explanation 
  
  .tab 
    h4 விளக்கம் : 
    .tab-header
      a(@click="select('mv')", :class="{active: isSelected('mv')}") மு.வரதராசனார்
      a(@click="select('sp')", :class="{active: isSelected('sp')}") சாலமன்பாப்பையா
      a(@click="select('mk')", :class="{active: isSelected('mk')}") மு.கருணாநிதி
    .tab-content
      | {{ kural[selected] }}  
</template>

<script>
import Thirukkural from 'static/thirukkural'
import thirukkural from 'static/kural'
export default {
  data() {
    return{
      thirukkural: Thirukkural,
      show: false,
      selected: 'mv'
    }
  },
  fetch ({ store, params }) {
    store.commit('setKural',thirukkural)
    store.commit('setKuralByAdhigaram', params.adhigaram_slug)
    return params
  },
  computed: {
    kural () {
      return this.$store.state.kural
    }
  },
  methods: {
    select(urai) {
      this.selected = urai
    },
    isSelected(urai) {
      return this.selected === urai
    }
  }
}
</script>

<style lang="sass" scoped>
.explanation
  .tab
    h4
      font-size: 1.125rem
    .tab-header
      display: flex
      padding: 0.5rem 0 0
      
      a
        display: inline-block
        margin-right: 1rem
        font-weight: bold
        font-size: 1.125rem
        opacity: 0.6
        cursor: pointer
        &:hover
          opacity: 0.8
        &.active
          opacity: 1
    .tab-content
      padding: 1rem 0
      font-size: 1.1rem

    h2
      font-weight: bold
      padding: 0.3rem

      
</style>