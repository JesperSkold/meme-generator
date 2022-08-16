import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBody = styled.div`
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 2px;
  padding: 1rem;
`

export const MemeImg = styled.img`
  width: auto;
  height: 60vh;
`

export const NewMemeTextForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const NewMemeTextBox = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  width: 80%;
  align-self: center;
`

export const NewMemeBtn = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  width: 12rem;
  align-self: center;
`

export const LinkStatus = styled.p`
align-self: center;
`
