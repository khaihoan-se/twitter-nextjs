/** @format */

import axiosClient from './axiosClient'

export interface ParamsType {
   [key: string]: string
}
const AuthApi = {
   checkEmail: (params: ParamsType) => {
      const url = '/auth/check_email'
      return axiosClient.post(url, params)
   },
   login: (params: ParamsType) => {
      const url = '/auth/login'
      return axiosClient.post(url, params)
   },
   refreshToken: () => {
      const url = '/auth/refreshToken'
      return axiosClient.post(url)
   },
}

export default AuthApi
