import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accounts: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setAccounts: (state, action) => {
            state.accounts = action.payload
        },
    }
})

export const { setAccounts } = dataSlice.actions

export default dataSlice.reducer
