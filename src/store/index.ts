import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './reducers/users'

const store = configureStore({
    reducer: {
        users: usersReducer,
    }
},)

// Get the state and dispatch types from the store object
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store