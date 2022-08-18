import styled from "styled-components"
import { keyframes } from "styled-components"

const slideDown = keyframes`
 from {
    margin-top: 0;
  }

  to {
    margin-bottom: 100%;
  }
`

const slideUp = keyframes`
  to {
    margin-top: 0;
    opacity: 0;
  }

  from {
    opacity: 1;
    margin-top: 2rem;
  }
`

export const Wrapper = styled.div<{ showModal: boolean }>`
  display: ${(props) => (props.showModal ? null : "flex")};
  visibility: ${(props) => (props.showModal ? "hidden" : "visible")};
  flex-direction: column;
  align-items: center;
  color: white;

  h2:nth-child(2) {
    margin: 7rem 0 0 0;
  }
`

export const StyledSearchBar = styled.input<{
  scrollDirection: string
  showModal: boolean
}>`
  padding: 1rem;
  width: 30%;
  margin-top: 2rem;
  position: fixed;
  opacity: ${({ scrollDirection, showModal }) =>
    (scrollDirection === "top" && !showModal) ||
    (scrollDirection === "upwards" && !showModal)
      ? 1
      : 0};
      
  pointer-events: ${({ scrollDirection }) =>
    scrollDirection === "top" || scrollDirection === "upwards"
      ? "auto"
      : "none"};

  animation-name: ${({ scrollDirection }) =>
    scrollDirection === "top" || scrollDirection === "upwards"
      ? slideDown
      : null};

  animation-name: ${({ scrollDirection }) =>
    scrollDirection === "downwards" ? slideUp : null};

  animation-duration: 0.3s;
`
