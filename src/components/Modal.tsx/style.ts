import styled from "styled-components";

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

export const MemeTextForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
