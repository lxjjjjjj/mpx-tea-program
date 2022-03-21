import { createStore } from '@mpxjs/core'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'

const store = createStore({
  state,
  mutations,
  actions
})

export default store