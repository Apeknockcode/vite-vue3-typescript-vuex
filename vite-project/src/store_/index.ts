/*
 * @name:
 * @test:
 * @message:
 * @param:
 * @return:
 */
import {createStore, useStore as baseUseStore, Store} from 'vuex'
import {InjectionKey} from 'vue'
import state from './defaultState'
import mutations from './modules'
import modules from './modules'

interface state {}
export const key: InjectionKey<Store<State>> = Symbol()

export interface State {
  UserToken: string
}

export const store = createStore({
  state,
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}

// export default store
