<template lang="pug">
.kural(v-if="kural")
  .navigation
    nuxt-link(:to="`/kural/${random()}`") Random
    nuxt-link(:to="`/kural/${prev()}`") Previous
    nuxt-link(:to="`/kural/${next()}`") Next
  .adhigaram
    p {{ kural.id  }}
    h3 {{ kural.paal }} / {{ kural.iyal }}
    h2 {{ kural.adhigaram }}
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
      : (this.kural.id + 1)
    }
  },
  components: {
    Explanation
  }
}
</script>

