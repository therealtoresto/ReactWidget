import { createSlice } from '@reduxjs/toolkit'
import usersData from '../initData.json'

const initialState = usersData

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUser(state, action) {
            state = initialState
        },
    }
})

export default usersSlice.reducer