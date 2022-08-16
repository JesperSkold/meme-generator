import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { StyledSearchBar, Wrapper } from "./style"

const Searchbar = () => {
  const { memeData } = useSelector((state: RootState) => state.memeData)
  // console.log(memeData);

  // const searchMemes = (searchterm) => {
  //   const searchedMemes = memeData.data.memes.filter(meme => meme.match())
  // }
  
  return (
    <Wrapper>
      <StyledSearchBar placeholder="Search for memes..." />
      <h2>Click on a meme to customize it!</h2>
    </Wrapper>
  )
}

export default Searchbar
