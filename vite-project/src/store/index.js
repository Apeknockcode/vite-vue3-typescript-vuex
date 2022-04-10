import { createStore } from 'vuex'
import state from './defaultState'
import mutations from './mutations'
import modules from './module'

const store = createStore(
    {
        state,
        mutations,
        modules
    }
)
export default store