import React from 'react';
import styled from 'styled-components';

const ButtonText = styled.span`
  font-weight: 700;
  font-size: 17px;
`

const Button = ({className, to, text}) => (
  <button type="button" onClick={(e) => {
    e.preventDefault();
    window.location.href=to;
  }} className={className}>
    <ButtonText>
      { text }
    </ButtonText>
  </button>
)

const ApplyButton = styled(Button)`
  margin-bottom: 8px;
  background-color: #F2DC81;
  /* padding: 35px 70px 35px 70px; */
  border: 3px solid black;
  border-radius: 10px;
  box-shadow: 2px 0px 0px black;
  width: 284px;
  height: 90px; 

  &:hover {
    background-color: #EDD15F;
    cursor: pointer;
  }

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 3px;
    width: 175px;
    height: 69px;
  }
`

export default ApplyButton;