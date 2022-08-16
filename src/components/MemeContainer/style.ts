import styled from "styled-components"

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: repeat(auto-fit, 260px);
  grid-auto-flow: dense;
  grid-gap: 2rem;
  padding: 5rem;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
