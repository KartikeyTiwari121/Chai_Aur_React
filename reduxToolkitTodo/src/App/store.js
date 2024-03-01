import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
// 1st step is to make store

export const store = configureStore({
    reducer: todoReducer
})