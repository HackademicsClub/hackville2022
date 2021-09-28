import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;


  @media (max-width: 767px) and (min-width: 477px) {
    flex-direction: row;
    margin: 0;
  }

  @media only screen and (max-width: 478px) {
    margin: 0;
  }
`