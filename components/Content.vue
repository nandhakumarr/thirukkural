<template lang="pug">
  sub
    router-sub(v-for="sub in subject")
      text {{ sub.content }}
</template>

<script>
export default {
  props: ['subject']
}
</script>