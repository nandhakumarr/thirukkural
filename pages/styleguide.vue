<template lang="pug">
.page.styleguide
  header
    navigation.primary(:links="primaryNavigation")
  nuxt-child
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  data () {
    return {
      primaryNavigation: [
        { title: 'Typography', icon: 'text_fields', url: 'styleguide/typography' },
        { title: 'Form', icon: 'check_box', url: 'styleguide/form' },
        { title: 'UI Components', icon: 'widgets', url: 'styleguide/ui-components' }
      ]
    }
  },
  components: {
    Navigation
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.page.styleguide
  padding-left: 4rem
  nav.primary
    @include fixed-left

</style>

<style lang="sass">
@import 'assets/styles/thirukkural'
.page.styleguide
  main
    background: #FFFFFF
    h1.styleguide
      @include theme(inherit, #EDEDED)
      margin: 1rem 0rem 1rem
      font-size: 0.8rem
      padding: 1rem
    h1.styleguide + section
      padding: 1rem

  nav.primary
    display: flex
    flex-direction: column
    @include theme(inherit, #D2D2D2)
    a
      color: #000000
      padding: 1rem
      display: inline-block
  nav.secondary
    display: flex
    flex-direction: column
    min-width: 10rem
    background: #F9F9F9
    a
      color: #333333
      padding: 1rem
      font-size: 0.8rem
      display: inline-block
      border-bottom: 1px solid #EEEE
      &:hover, &.active
        background: #FEFEFE
</style>
