import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { fetchMemes } from "../../features/memeSlice"
import { setModalImg, toggleModalOn } from "../../features/modalSlice"
import { Meme } from "../../interfaces/memeData"

const MemeContainer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { memeData, loading } = useSelector((state: RootState) => state.memeData)


  const handleClick = (meme: Meme) => {
    dispatch(toggleModalOn())
    dispatch(setModalImg(meme))
  }
  useEffect(() => {
    dispatch(fetchMemes())
  }, [])

  // console.log(memeData, "whole object")
  // console.log(memeData.data.memes)
  
  return (
    <section>
      {memeData &&
        memeData.data.memes.map((meme) => (
          <article key={meme.id} onClick={() => handleClick(meme)}>
            <p>{meme.name}</p>
            <p>{meme.id}</p>
            <img src={meme.url} />
          </article>
        ))}
    </section>
  )
}

export default MemeContainer