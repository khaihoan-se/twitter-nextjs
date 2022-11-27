/** @format */

import { ACTIONS } from '.'

export const dispatchNotify = (data: boolean) => {
   return {
      type: ACTIONS.IS_NOTIFY,
      payload: data,
   }
}
