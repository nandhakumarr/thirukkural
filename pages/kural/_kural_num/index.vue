<template lang="pug">
.page
  kural-detail(:kural="kural")
  social-sharing(:url="share-url")
</template>

<script>
import KuralDetail from '@/components/KuralDetail'
import thirukkural from 'static/thirukkural'
import SocialSharing from '@/components/SocialShare'
import _ from 'lodash'

export default {
  data () {
    return {
      id: null,
      shareUrl: null
    }
  },
  created () {
    this.id = this.$route.params.kural_num
    this.shareUrl = this.$route.path
    
  },
  computed: {
    kural () {
      return _.find(thirukkural, { id: parseInt(this.id) })
    }
  },
  components: {
    KuralDetail,
    SocialSharing
  },
}
 </script>