import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { fetchMemes } from "../../features/memeSlice"
import { setModalImg, toggleModalOn } from "../../features/modalSlice"
import { Meme } from "../../interfaces/memeData"
import ImageGridItem from "../ImageGridItem"
import { Gallery } from "./style"

const MemeContainer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { memeData } = useSelector((state: RootState) => state.memeData)

  useEffect(() => {
    dispatch(fetchMemes())
  }, [])

  return (
    <Gallery>
      {memeData &&
        memeData.data.memes.map((meme, i) => (
          <ImageGridItem key={meme.id} meme={meme}/>
        ))}
    </Gallery>
  )
}

export default MemeContainer
