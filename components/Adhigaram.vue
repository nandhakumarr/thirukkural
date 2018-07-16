<template lang="pug">
div.athigaram
    div(v-for="data in myJson")
        h2 {{ data.Line1 }} 
        h2 {{ data.Line2 }}
</template>
<script>
import Thirukkural from 'static/thirukkural.json';
export default {
 data () {
      myJson: Thirukkural
    }
}
</script>

<style lang="sass" scoped>

</style>
