<template lang="pug">
.page
  h1.kural(v-if="kural")
    | {{ kural.Line1 }}
    br
    | {{ kural.Line2 }}
</template>

<script>
export default {
  props: ['kural'],
  mounted () {
  }
}
</script>

<style lang="sass">

</style>
