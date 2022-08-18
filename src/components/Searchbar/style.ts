import styled from "styled-components"

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

export const StyledSearchBar = styled.input<{ scrollDirection: string; showModal: boolean }>`
  padding: 1rem;
  width: 30%;
  margin-top: 2rem;
  position: fixed;
  visibility: ${({ scrollDirection, showModal }) => ((scrollDirection === "top" && !showModal) || (scrollDirection === "upwards" && !showModal) ? "visible" : "hidden")};
`
