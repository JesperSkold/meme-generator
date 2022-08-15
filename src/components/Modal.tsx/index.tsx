import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postMeme } from "../../api/postMeme"
import { AppDispatch, RootState } from "../../app/store"
import { toggleModalOff } from "../../features/modalSlice"
import { ModalOverlay, ModalBody, MemeImg, MemeTextForm } from "./style"



const Modal = () => {
  const { modalMeme } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch<AppDispatch>()
  const [payload, setPayload] = useState({
    id: modalMeme.id,
    "text0": "",
    "text1": "",
    username: process.env.REACT_APP_PUBLIC_IMGFLIP_USER_ID || "",
    password: process.env.REACT_APP_PUBLIC_IMGFLIP_PASSWORD || ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(await postMeme(payload))
  }
  console.log(modalMeme.box_count, "YEA");
  console.log(modalMeme);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({...payload, [e.target.name]: e.target.value})
  }
  
  return (
   <ModalOverlay onClick={() => dispatch(toggleModalOff())}> 
      <ModalBody onClick={e => e.stopPropagation()}>
        <MemeImg src={modalMeme.url} alt="Picture of a meme" />
        <MemeTextForm onSubmit={(e) => handleSubmit(e) }>
          <input name="text0" type="text" onChange={(e) => handleChange(e)}/>
          <input name="text1" type="text" onChange={(e) => handleChange(e)}/>
          <button>SEND</button>
        </MemeTextForm>
      </ModalBody>
    </ModalOverlay>
  )
}

export default Modal
