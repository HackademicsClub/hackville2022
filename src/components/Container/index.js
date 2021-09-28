import React from 'react';
import styled from 'styled-components';
import YellowBackground from '../../images/backgrounds/bg-yellow.png'

const StyledContainer = styled.div`
  background-image: url(${YellowBackground});
  width: 100%;
  height: 100vh;
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

const Container = (props) => {
  return (
    <StyledContainer>
      { props.children }
    </StyledContainer>
  )
}

export default Container;