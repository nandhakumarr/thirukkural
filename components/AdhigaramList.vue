<template lang="pug">
.adhigaram.list
  a(@click="openMenu()")
    img.menu(src="/agaram.svg")
  .mask(v-if="open" @click="hideMenu()")
  .popup(v-if="open")
    nuxt-link(v-for="a in adhigarams", :key="a.id", :to="a.slug")
      ul.items-list
        li {{ a.name }}
</template>

<script>
import Thirukkural from 'static/thirukkural'
import _ from 'lodash'

export default {
  data () {
    return {
      adhigarams: [],
      open: false
    }
  },
  methods: {
    openMenu () {
      this.open = true
    },
    hideMenu () {
      this.open = false
    }
  },
  mounted () {
    this.adhigarams = _.uniqBy(_.map(Thirukkural, function (t) {
      return {
        name: t.adhigaram,
        slug: t.athigaram_slug,
        id: t.id
      }
    }), 'name')
  },
components: {
}
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.adhigaram.list
  position: relative
  > a
    display: inline-block
    cursor: pointer
    .menu
      width: 100px
      height: 60px
  .mask
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
  .popup
    overflow: scroll
    position: absolute
    top: 135%
    box-shadow: 0 0 0.25rem 0.125rem rgba($neutral, 0.2)
    width: 300px
    background: linear-gradient(135deg, #fbda61 0%, #f76b1c 100%)
    overflow-x:auto
    z-index: 1
    padding: 50px 0
    transition: .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    height: 100vh
    .items-list
      list-style: none
      margin: 0
      padding: 0
      > li
        margin: 0
        padding: 0.5rem 1rem
        border-bottom: 1px solid $neutral-light
        min-width: 7rem
        &:last-child
          border-bottom: none
        &:hover
          background: rgba($brand-color, 0.1)
    a
      text-decoration: none
      color: $black
      white-space: nowrap
</style>
