import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getMemes } from "../api/getMemes"
import { Meme, MemeData } from "../interfaces/memeData"

export const fetchMemes = createAsyncThunk("memes/fetchMemes", async () => {
  return await getMemes()
})

interface MemeState {
  memeData: MemeData
  searchedMemes: Meme[]
  showSearchedMemes: boolean
  loading: "idle" | "pending" | "succeeded" | "rejected"
}

const initialState: MemeState = {
  memeData: { success: false, data: { memes: [] } },
  searchedMemes: [],
  showSearchedMemes: false,
  loading: "idle",
}

export const memeSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    setSearchedMemes: (state, action) => {
      state.searchedMemes = action.payload
    },
    setShowSearchedMemes: (state) => {
      state.showSearchedMemes = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMemes.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.memeData = action.payload
    })
  },
})

export const { setSearchedMemes, setShowSearchedMemes } = memeSlice.actions

export default memeSlice.reducer
