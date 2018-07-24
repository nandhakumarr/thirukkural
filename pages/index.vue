<template lang="pug">
.page
  header
    headernav.head
  vilakkam
</template>


<script>
import Headernav from '~/components/Headernav'
import Vilakkam from '~/components/Vilakkam'
import meta from 'static/details'
import _ from 'lodash'

export default {
  data () {
    return {
      Navigation: [

      ]
    }
  },
  components: {
    Headernav,
    Vilakkam
  },
  mounted () {
    let self = this
    let t = require('static/thirukkural')
    t = _.map(t, kural => {
      const d = self.findDetail(kural.adhigaram)
      return _.merge(kural, d)
    })
    console.log(JSON.stringify(t))
  },
  methods: {
    findDetail (adhigaram) {
      let detail = {}
      _.each(meta, s => {
        // console.log(s.tamil, 's')
        _.each(s.detail, d => {
          // console.log(d.name, 'd')
          _.each(d.chapterGroup.detail, e => {
            // console.log(e.name, 'cg')
            _.each(e.chapters, c => {
              // console.log(e.name, 'c')
              _.each(c, a => {
                if (a.name == adhigaram) {
                  detail = {
                    adhigaram_translation: a.translation,
                    adhigaram_transliteration: a.transliteration,
                    iyal: e.name,
                    iyal_translation: e.translation,
                    iyal_transliteration: e.transliteration,
                    paal: d.name,
                    paal_translation: d.translation,
                    paal_transliteration: d.transliteration,
                  }
                }
              })
            })
          })
        })
      })
      return detail
    }
  }
}

</script>

<style lang="sass">
@import 'assets/styles/thirukkural'
.page
  display: flex
</style>

