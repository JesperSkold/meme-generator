import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { fetchMemes } from "../../features/memeSlice"
import ImageGridItem from "../ImageGridItem"
import { Gallery } from "./style"

const MemeContainer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { memeData, searchedMemes, showSearchedMemes } = useSelector((state: RootState) => state.memeData)

  useEffect(() => {
    dispatch(fetchMemes())
  }, [dispatch])

  return (
    <Gallery>
      {searchedMemes.length > 0 && showSearchedMemes
        ? searchedMemes.map((meme) => <ImageGridItem key={meme.id} meme={meme} />)
        : memeData && !showSearchedMemes && memeData.data.memes.map((meme) => <ImageGridItem key={meme.id} meme={meme} />)}
    </Gallery>
  )
}

export default MemeContainer
