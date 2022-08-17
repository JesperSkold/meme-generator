import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { setSearchedMemes, setShowSearchedMemes } from "../../features/memeSlice"
import { StyledSearchBar, Wrapper } from "./style"

const Searchbar = () => {
  const { memeData, searchedMemes, showSearchedMemes } = useSelector((state: RootState) => state.memeData)  
  const dispatch = useDispatch<AppDispatch>()
  
  const searchMemes = (searchterm: string) => {
    const re = new RegExp(searchterm, "i")
    const searchedMemes = memeData.data.memes.filter((meme) => meme.name.match(re))
    dispatch(setSearchedMemes(searchedMemes))
    if (!showSearchedMemes) {
      dispatch(setShowSearchedMemes())
    }
  }

  return (
    <Wrapper>
      <StyledSearchBar placeholder="Search for memes..." onChange={(e) => searchMemes(e.target.value)} />
      {showSearchedMemes && searchedMemes.length !== memeData.data.memes.length && <h2>{searchedMemes.length} memes found</h2>}
      {searchedMemes.length === 0 && showSearchedMemes ? null : <h2>Click on a meme to customize it!</h2>}
    </Wrapper>
  )
}

export default Searchbar
