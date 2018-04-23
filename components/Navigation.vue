<template lang="pug">
  nav
    router-link(v-for="l in links", :key="l.url" :to="l.url", title="l.title")
      i.material-icons(v-if="l.icon") {{ l.icon }}
      span(v-if="l.label") {{ l.label }}
</template>

<script>
export default {
  props: ['links']
}
</script>

