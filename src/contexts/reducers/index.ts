/** @format */

import { combineReducers } from 'redux'
import auth from './authReducer'
import global from './globalReducer'

const rootReducer = combineReducers({
   auth,
   global,
})

export default rootReducer
