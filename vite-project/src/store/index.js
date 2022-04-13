import { createStore } from 'vuex'
import state from './defaultState'
import mutations from './mutations'
import modules from './modules'

const store = createStore(
    {
        state,
        mutations,
        modules
    }
)
export default store