import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postMeme } from "../../api/postMeme"
import { AppDispatch, RootState } from "../../app/store"
import { postNewMeme, toggleModalOff } from "../../features/modalSlice"
import { NewMeme } from "../../interfaces/memeData"
import Spinner from "../Spinner"
import { ModalOverlay, ModalBody, MemeImg, NewMemeTextForm, NewMemeTextBox, NewMemeBtn, LinkStatus, MemeName, ErrorText } from "./style"

const Modal = () => {
  const { modalMeme, newMeme, status } = useSelector((state: RootState) => state.modal)
  const [copyTextBool, setCopyTextBool] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()
  const [payload, setPayload] = useState({
    template_id: modalMeme.id,
    username: process.env.REACT_APP_PUBLIC_IMGFLIP_USER_ID || "",
    password: process.env.REACT_APP_PUBLIC_IMGFLIP_PASSWORD || "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postNewMeme(payload))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }
  
  const copyTextHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigator.clipboard.writeText(newMeme.data.url)
    setCopyTextBool(true)
  }

  return (
    <ModalOverlay onClick={() => dispatch(toggleModalOff())}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <MemeName>{modalMeme.name}</MemeName>
        {status === "pending" && <Spinner />}
        <MemeImg src={newMeme.success ? newMeme.data.url : modalMeme.url} alt="Picture of a meme" />
        <NewMemeTextForm onSubmit={(e) => handleSubmit(e)}>
          {!newMeme.success && [...Array(modalMeme.box_count)].map((elem, i) => (
            <NewMemeTextBox key={i} type="text" placeholder={`Text ${i + 1}`} name={`boxes[${i}][text]`} onChange={(e) => handleChange(e)} />
          ))}
          {newMeme.error_message && <ErrorText>No texts specified.</ErrorText>}
          {newMeme.success ? <NewMemeBtn onClick={(e) => copyTextHandler(e)}>Copy link to your meme</NewMemeBtn> : <NewMemeBtn>Generate your meme!</NewMemeBtn>}
            {copyTextBool && <LinkStatus>Link to meme successfully copied, share it with your friends!</LinkStatus>}
        </NewMemeTextForm>
      </ModalBody>
    </ModalOverlay>
  )
}

export default Modal
