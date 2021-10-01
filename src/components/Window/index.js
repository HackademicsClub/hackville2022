import React from 'react';
import { WindowContainer, WindowHeader, WindowTitle, WindowDot, WindowContent, DotsContainer } from "./styles"


const Window = (props) => {
  return (
    <WindowContainer width={props.width} mediumViewWidth={props.mediumViewWidth} mobileWidth={props.mobileWidth} height={props.height}
      margin={props.margin}>
      <WindowHeader>
        <DotsContainer>
          <WindowDot style={{backgroundColor: 'black'}}/>
          <WindowDot/>
          <WindowDot/>
        </DotsContainer>
        <WindowTitle>{ props.title ? props.title : <br/>}</WindowTitle>
      </WindowHeader>
      <WindowContent>
        { props.children }
      </WindowContent>
    </WindowContainer>
  )
}

export default Window;