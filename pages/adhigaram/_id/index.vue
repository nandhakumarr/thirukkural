<template lang="pug">
.page
  adhigaram-detail(:adhigaramdetail="adhigaramdetail")
  
</template>

<script>
import AdhigaramDetail from '@/components/AdhigaramDetail'
import thirukkural from 'static/thirukkural'
import _ from 'lodash'

var start, end, i
export default {
  data () {
    return {
      id:'',
      kurals:[]
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  computed: {
    adhigaramdetail () {
      //if(this.id==0){
     //   start=1;
     //   end=10;
     // }
     // else
     // {
      //  start=(this.id*10)
      //  end=(this.id*10)+9
      //}
     return(_.chunk(thirukkural, 10)[this.id])
     // for (i = start; i <= end; i++) {
        
       // return(thirukkural[i])
     // }
      return null
     }
  },

  components: {
    AdhigaramDetail
  },
}
 </script>