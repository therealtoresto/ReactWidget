import { createSlice } from '@reduxjs/toolkit'
import usersData from '../../initData.json'

const initialState = usersData

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer