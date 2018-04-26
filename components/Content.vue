<template lang="pug">
  sub
    router-sub(v-for="sub in subject", :key="sub", :to="sub.url", :title="sub.title")
      title {{ sub.content }}
</template>

<script>
export default {
  props: ['subject']
}
</script>