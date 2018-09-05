<template lang="pug">
.kural(v-if="kural")
  .adhigaram
    h3 {{ kural.paal }} / {{ kural.iyal }}
    h3 {{ kural.adhigaram }}
  .section
    p {{ kural.line1 }}
    p {{ kural.line2 }}

  explanation
</template>

<script>
import Explanation from '~/components/Explanation'
export default {
  props: ['kural'],
  components: {
    Explanation
  }
}
</script>

