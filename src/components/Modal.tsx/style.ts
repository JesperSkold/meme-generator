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
  cursor: pointer;
`

export const ModalBody = styled.div`
  background: #2d2d2d;
  border: 1px solid #2d2d2d9d;
  border-radius: 2px;
  padding: 2rem;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 950px) {
    width: 55vw;
    height: auto;
  }
`

export const MemeImg = styled.img`
  width: 50vh;
  max-height: 50vh;
  object-fit: contain;
  /* min-width: 30vh;
  height: 50vh; */
  @media (max-width: 950px) {
    width: inherit;
    height: auto;
  }

  @media (max-height: 900px) {
    max-height: 35vh;
  }

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

  &:first-child{
    margin-top: 1rem;
  }
`

export const NewMemeBtn = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  width: 12rem;
  align-self: center;
  cursor: pointer;
`

export const LinkStatus = styled.p`
  align-self: center;
  color: white;
  margin-top: 1rem;
  width: inherit;
  text-align: center;
`

export const MemeName = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`
