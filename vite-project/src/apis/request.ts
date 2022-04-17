import type {RequestConfig} from './types/types'
import requestApi from './api'
interface Config<T> extends RequestConfig {
  data?: T
}
interface response<T> {
  code: number
  message: string
  data: T
}
/**
 * @description: 函数的描述
 * @interface D 请求参数的interface
 * @interface T 响应结构的intercept
 * @param {config} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export const request = <D, T = any>(config: Config<D>) => {
  const {method = 'GET'} = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return requestApi.request<response<T>>(config)
}