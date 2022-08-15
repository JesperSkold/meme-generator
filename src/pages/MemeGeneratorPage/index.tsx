import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import MemeContainer from "../../components/MemeContainer"
import Modal from "../../components/Modal.tsx"

const MemeGeneratorPage = () => {
  const { showModal } = useSelector((state: RootState) => state.modal)
  return (
    <>
      {showModal && <Modal />}
      <MemeContainer />
    </>
  )
}

export default MemeGeneratorPage
