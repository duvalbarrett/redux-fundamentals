import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartsVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartsVisible = !state.cartsVisible;
        },
        showNotification(state,action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions

export default uiSlice;