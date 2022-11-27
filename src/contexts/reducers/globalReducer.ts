/** @format */

import { ACTIONS } from './../actions/index'
const initialState: { isNotify: boolean; isLoading: boolean } = {
   isNotify: false,
   isLoading: false,
}

const globalReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case ACTIONS.IS_NOTIFY:
         return {
            ...state,
            isNotify: action.payload,
         }

      default:
         return state
   }
}

export default globalReducer
