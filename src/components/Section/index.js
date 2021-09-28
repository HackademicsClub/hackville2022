import React from 'react';
import styled from 'styled-components';
import YellowBackground from '../../images/backgrounds/bg-yellow.png'

const StyledSection = styled.section`
  background-image: url(${(props) => props.background});   
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
  justify-content: center;
`

const Section = ({ background, children }) => {
  return (
    <StyledSection background={background}>
      { children }
    </StyledSection>
  )
}

export default Section;