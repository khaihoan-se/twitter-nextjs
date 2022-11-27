/** @format */

import { UserType } from './../../type'
import { ACTIONS } from '@/contexts/actions'

const initialState: { user: UserType[]; isLogged: boolean } = {
   user: [],
   isLogged: false,
}

const authReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case ACTIONS.AUTH_LOGIN:
         return {
            ...state,
            isLogged: true,
         }
      case ACTIONS.GET_USER:
         return {
            ...state,
            user: action.payload,
         }
      case ACTIONS.AUTH_LOGOUT:
         return {
            ...state,
            isLogged: false
         }
      default:
         return state
   }
}

export default authReducer
