<template lang="pug">
  sub
    content-sub(v-for="sub in subject")
</template>

<script>
export default {
  props: ['subject']
}
</script>