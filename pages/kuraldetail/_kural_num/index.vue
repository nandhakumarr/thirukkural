<template lang="pug">
.kural
  kuraldetail
</template>

<script>

import KuralDetail from '@/components/kuraldetail'
import thirukkural from 'static/thirukkural.json'
import _ from 'lodash'
export default {
data () {
  return {
    kural: {
      Line1:''
    }
  }
},
component: {
  KuralDetail
},
mounted () {
  const id = this.$route.params.kural_num
// this.kural = _.find(thirukkural, { 'Number': id })
  this.kural.Line1= id
}
}
 </script>