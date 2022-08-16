import styled from "styled-components"

export const StyledSpinner = styled.svg`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .path {
    stroke: #701bdf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
// export const StyledSpinner = styled.svg`
//   /* animation: rotate 1s linear infinite;
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   /* margin-top: 10rem; */
//    */

//   & .path {
//     stroke: #701bdf;
//     stroke-linecap: round;
//     animation: dash 1.5s ease-in-out infinite;
//   }

//   @keyframes rotate {
//     100% {
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes dash {
//     0% {
//       stroke-dasharray: 1, 150;
//       stroke-dashoffset: 0;
//     }
//     50% {
//       stroke-dasharray: 90, 150;
//       stroke-dashoffset: -35;
//     }
//     100% {
//       stroke-dasharray: 90, 150;
//       stroke-dashoffset: -124;
//     }
//   }
// `;
