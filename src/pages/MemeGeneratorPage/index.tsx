import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import MemeContainer from "../../components/MemeContainer"
import Modal from "../../components/Modal.tsx"
import Searchbar from "../../components/Searchbar"

const MemeGeneratorPage = () => {
  const { showModal } = useSelector((state: RootState) => state.modal)
  return (
    <>
      {showModal && <Modal />}
      <Searchbar />
      <MemeContainer />
    </>
  )
}

export default MemeGeneratorPage
