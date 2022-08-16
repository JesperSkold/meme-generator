import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { postMeme } from "../api/postMeme"
import { Meme, NewMeme } from "../interfaces/memeData"

export const postNewMeme = createAsyncThunk("newMeme/postNewMeme", async (payload:any) => {
  return await postMeme({...payload})
})

const initialState = {
  showModal: false,
  modalMeme: {} as Meme,
  newMeme: {} as NewMeme,
  status: "idle" as "idle" | "pending" | "succeeded" | "rejected"
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
      state.newMeme = {} as NewMeme
    },
    setModalImg: (state, action) => {
      state.modalMeme = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postNewMeme.pending, (state) => {
      state.status = "pending"
    })
    builder.addCase(postNewMeme.fulfilled, (state, action) => {
      state.status = "succeeded"
      state.newMeme = action.payload
    })
    builder.addCase(postNewMeme.rejected, (state) => {
      state.status = "rejected"
    })
  },
})

export const { toggleModalOn, toggleModalOff, setModalImg } = modalSlice.actions

export default modalSlice.reducer
