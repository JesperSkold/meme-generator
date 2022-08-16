import React from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../app/store"
import { setModalImg, toggleModalOn } from "../../features/modalSlice"
import { Meme } from "../../interfaces/memeData"

interface Iprops {
  meme: Meme
}

const ImageGridItem = ({ meme }: Iprops) => {
  const dispatch = useDispatch<AppDispatch>()
  const handleClick = (meme: Meme) => {
    dispatch(toggleModalOn())
    dispatch(setModalImg(meme))
  }

  const getSpanEstimate = (size: number) => {
    if (size > 600) {
      return 2
    }
    return 1
  }
  const style = {
    gridColumnEnd: `span ${getSpanEstimate(meme.width)}`,
    gridRowEnd: `span ${getSpanEstimate(meme.height)}`,
  }
  return <img style={style} src={meme.url} alt={meme.name} onClick={() => handleClick(meme)} />
}

export default ImageGridItem
