/** @format */

import { UserType } from '@/types'
import { ACTIONS } from '.'

export const dispatchLogin = () => {
   return {
      type: ACTIONS.AUTH_LOGIN,
   }
}

export const dispatchLogout = () => {
   return {
      type: ACTIONS.AUTH_LOGOUT,
   }
}

export const dispatchGetUser = (data: any) => {
   return {
      type: ACTIONS.GET_USER,
      payload: data,
   }
}
