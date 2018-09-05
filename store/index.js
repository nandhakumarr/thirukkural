import Vuex from 'vuex'
import _ from 'lodash'

const store = () => {
  const store = new Vuex.Store({
    state: {
      thirukkural: null,
      kural: null,
      currentKural: 0
    },
    mutations: {
      setKuralByAdhigaram (state, adhigaram_slug) {
        let kural = _.find(state.thirukkural, function(kural) {
          return kural.adhigaram_slug === adhigaram_slug
        })
        state.kural = kural
      },
      setKuralById (state, id) {
        let kural = _.find(state.thirukkural, function(kural) {
          return kural.id == id
        })
        state.kural = kural
      },
      setKural (state, kural) {
        state.thirukkural = kural
      },
      updateCurrentKural (state, kural) {
        state.currentKural++
      }
    }
  })
  return store
}
export default store