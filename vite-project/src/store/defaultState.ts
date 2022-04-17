import { InjectionKey } from 'vue'
import { Store } from 'vuex'
export interface State {
  UserToken: string
}
export const key: InjectionKey<Store<State>> = Symbol()


// export const state = createStore<State>({
//   state: {
//     UserToken: 0,
//   },
// })

export default {
  get UserToken() {
    return localStorage.getItem('token')
  },
  set UserToken(value) {
    return localStorage.setItem('token', value)
  },
}

