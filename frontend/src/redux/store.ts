import {configureStore} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'

import rootReducer from './root-reducer' 

const store = configureStore({
    reducer: rootReducer,

})

export default store

export type RootState = ReturnType<typeof rootReducer>