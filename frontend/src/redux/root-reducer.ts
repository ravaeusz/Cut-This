

import {combineReducers} from 'redux'
import userReducer from './user/reducer'
import groupReducer from './group/reducer'


const rootReducer = combineReducers({user:userReducer, group: groupReducer})

export default rootReducer