import React from 'react';
import styled from 'styled-components';

const ButtonText = styled.span`
  font-weight: 700;
  font-size: 17px;
`

const Button = ({className, to, text, preRegister}) => (
  <button type="button" onClick={(e) => {
    e.preventDefault();
    window.location.href=to;
  }} className={className}>
    <ButtonText>
      { text }
      <br/>
      <span>APPLY NOW</span>
    </ButtonText>
  </button>
)

export default Button;


