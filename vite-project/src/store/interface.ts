import { IIndexState } from './modules/Login/interface'

// 后台接口返回参数类
export interface IAxiosResponseData {
  code: number
  data: any
  message: string
}

// 全局状态
export interface IGlobalState {
  userToken: any
  login: IIndexState
}
