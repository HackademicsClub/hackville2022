import React from 'react';
import styled from 'styled-components';

const ButtonText = styled.span`
  font-weight: 700;
  font-size: 17px;
  color: black;
`

const Button = ({className, to, text, secondText, disabled}) => (
  <button type="button" disabled={disabled} onClick={(e) => {
    e.preventDefault();
    window.location.href=to;
  }} className={className}>
    <ButtonText>
      { text }
      <br/>
      {secondText && 
        <span>{ secondText }</span>
      }
    </ButtonText>
  </button>
)

export default Button;


