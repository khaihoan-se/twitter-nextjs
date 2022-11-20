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
   updateUser: (token: string, user: ParamsType, id: string) => {
      console.log(user)

      const url = '/users'
      return axiosClient.patch(
         `${url}/${id}`,
         user,
         { headers: { Authorization: `Bearer ${token}` } }
      )
   },
}

export default UserApi
