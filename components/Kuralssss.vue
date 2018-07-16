<template>
  <nuxt-link :to="'/mykurals/'+ id">
    <article class="kural">
      <h2>{{ Numbers }}</h2>
   </article>
  </nuxt-link> 
</template>

<script>
export default {
  props:['Numbers','Line1','id']
}
</script>
<style scoped>
.kural{
 box-sizing: border-box;
 width: 10px;
 padding: 8px;
}

</style>


