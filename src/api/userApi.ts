/** @format */

import axiosClient from './axiosClient'

export interface ParamsType {
   [key: string]: string
}
const UserApi = {
   getAllUser: () => {
      const url = '/users'
      return axiosClient.get(url)
   },
   getUser: (username: string) => {
      const url = '/users'
      return axiosClient.get(`${url}/${username}`)
   },
}

export default UserApi
