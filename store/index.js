import Vuex from 'vuex'
import _ from 'lodash'

const store = () => {
  const store = new Vuex.Store({
    state: {
      thirukkural: null,
      kural: null
    },
    mutations: {
      setKuralByAdhigaram (state, athigaram_slug) {
        let kural = _.find(state.thirukkural, function(kural) {
          return kural.athigaram_slug === athigaram_slug
        })
        state.kural = kural
      },
      setKural (state, kural) {
        state.thirukkural = kural
      }
    }
  })
  return store
}
export default store