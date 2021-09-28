import React from 'react';
import styled from 'styled-components';
import { WindowContainer, WindowHeader, WindowTitle, WindowDot, WindowContent, DotsContainer } from "./styles"


const Window = (props) => {
  return (
    <WindowContainer width={props.width} height={props.height}>
      <WindowHeader>
        <DotsContainer>
          <WindowDot style={{backgroundColor: 'black'}}/>
          <WindowDot/>
          <WindowDot/>
        </DotsContainer>
        <WindowTitle>{ props.title }</WindowTitle>
      </WindowHeader>
      <WindowContent>
        { props.children }
      </WindowContent>
    </WindowContainer>
  )
}

export default Window;