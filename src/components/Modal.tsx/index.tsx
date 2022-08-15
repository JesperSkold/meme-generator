import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { ModalOverlay, ModalBody } from "./style"

const Modal = () => {
  const { modalImg } = useSelector((state: RootState) => state.modal)

  return (
    <ModalOverlay>
      <ModalBody><img src={modalImg} alt="Picture of a meme" /></ModalBody>
    </ModalOverlay>
  )
}

export default Modal
