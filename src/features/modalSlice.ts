import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Meme } from "../interfaces/memeData"

const initialState = {
  showModal: false,
  modalMeme: {} as Meme
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalOn: (state) => {
      state.showModal = true
    },
    toggleModalOff: (state) => {
      state.showModal = false
    },
    setModalImg: (state, action) => {
      state.modalMeme = action.payload
    }
  },
})

export const { toggleModalOn, toggleModalOff, setModalImg } = modalSlice.actions

export default modalSlice.reducer
