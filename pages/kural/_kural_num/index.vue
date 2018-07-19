<template lang="pug">
.page
  kural-detail(:kural="kural")
</template>

<script>
import KuralDetail from '@/components/KuralDetail'
import thirukkural from 'static/thirukkural'
import _ from 'lodash'

export default {
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.params.kural_num
  },
  computed: {
    kural () {
      return _.find(thirukkural, { id: parseInt(this.id) })
    }
  },
  components: {
    KuralDetail
  },
}
 </script>