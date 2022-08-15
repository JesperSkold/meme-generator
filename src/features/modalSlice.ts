import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  showModal: false,
  modalImg: ""
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal
    },
    setModalImg: (state, action) => {
      state.modalImg = action.payload
    }
  },
})

export const { toggleModal, setModalImg } = modalSlice.actions

export default modalSlice.reducer
