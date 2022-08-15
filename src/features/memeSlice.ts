import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getMemes } from "../api/getMemes"
import { MemeData } from "../interfaces/memeData"

export const fetchMemes = createAsyncThunk("memes/fetchMemes", async () => {
  return await getMemes()
})

interface MemeState {
  memeData: MemeData
  loading: "idle" | "pending" | "succeeded" | "rejected"
}

const initialState: MemeState = {
  memeData: { success: false, data: { memes: [] } },
  loading: "idle",
}

export const memeSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMemes.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.memeData = action.payload
    })
  },
})

export default memeSlice.reducer
