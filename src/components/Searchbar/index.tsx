import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import {
  setSearchedMemes,
  setShowSearchedMemes,
} from "../../features/memeSlice"
import { StyledSearchBar, Wrapper } from "./style"

const Searchbar = () => {
  const { memeData, searchedMemes, showSearchedMemes } = useSelector(
    (state: RootState) => state.memeData
  )
  const { showModal } = useSelector((state: RootState) => state.modal)
  const [scrollDirection, setScrollDirection] = useState<string>("top")
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    let prevValue = 0
    window.onscroll = () => {
      let y = window.scrollY
      if (y > prevValue) {
        setScrollDirection("downwards")
      }
      if (y < prevValue) {
        setScrollDirection("upwards")
      }
      if (y === 0) {
        setScrollDirection("top")
      }
      prevValue = y
    }
  }, [])

  const searchMemes = (searchterm: string) => {
    const re = new RegExp(searchterm, "i")
    const searchedMemes = memeData.data.memes.filter((meme) =>
      meme.name.match(re)
    )
    dispatch(setSearchedMemes(searchedMemes))
    if (!showSearchedMemes) {
      dispatch(setShowSearchedMemes())
    }
  }

  return (
    <>
      <Wrapper showModal={showModal}>
        <StyledSearchBar
          placeholder="Search for memes..."
          onChange={(e) => searchMemes(e.target.value)}
          scrollDirection={scrollDirection}
          showModal={showModal}
        />
        {showSearchedMemes &&
          searchedMemes.length !== memeData.data.memes.length && (
            <h2>
              {searchedMemes.length} meme
              {searchedMemes.length === 1 ? null : "s"} found
            </h2>
          )}
        {searchedMemes.length === 0 && showSearchedMemes ? null : (
          <h2>Click on a meme to customize it!</h2>
        )}
      </Wrapper>
    </>
  )
}

export default Searchbar
