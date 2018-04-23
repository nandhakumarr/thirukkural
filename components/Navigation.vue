<template lang="pug">
  nav
    router-link(v-for="link in links", :key="link", :to="link.url", :title="link.title")
      i.material-icons(v-if="link.icon") {{ link.icon }}
      span.label(v-if="link.label") {{ link.label }}
</template>

<script>
export default {
  props: ['links']
}
</script>
