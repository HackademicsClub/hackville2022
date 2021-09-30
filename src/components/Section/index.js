import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-image: url(${(props) => props.background});   
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100vh;
  max-height: 1100px;
  min-height: 1100px;
  max-width: none;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};

  overflow: hidden;
`

const Section = ({ background, bgColor, justifyContent, children }) => {
  return (
    <StyledSection background={background} bgColor={bgColor} justifyContent={justifyContent}>
      { children }
    </StyledSection>
  )
}

export default Section;