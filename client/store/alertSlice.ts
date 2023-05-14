import { createSlice } from '@reduxjs/toolkit'
import { TYPE } from '../enum'
interface IState {
  alert: {
    isAlert: boolean
    message: string
    type: string
  }
}

const initialState = {
  alert: {
    isAlert: false,
    message: 'Xóa thành công',
    type: TYPE.SUCCESS,
  },
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    createAlert: (state: IState, action) => {
      state.alert = {
        isAlert: action.payload.isAlert,
        message: action.payload.message,
        type: action.payload.type,
      }
    },
  },
})

export const { createAlert } = alertSlice.actions

export default alertSlice.reducer
