import React from 'react';
import { WindowContainer, WindowHeader, WindowTitle, WindowShortTitle, WindowDot, DotsContainer } from "./styles"


const Window = (props) => {
  return (
    <WindowContainer width={props.width} mediumViewWidth={props.mediumViewWidth} mobileWidth={props.mobileWidth} height={props.height}
      margin={props.margin} maxWidth={props.maxWidth} minWidth={props.minWidth}>
      <WindowHeader>
        <DotsContainer>
          <WindowDot style={{backgroundColor: 'black'}}/>
          <WindowDot/>
          <WindowDot/>
        </DotsContainer>
        <WindowTitle>{ props.title ? props.title : <br/>}</WindowTitle>
        <WindowShortTitle>{ props.shortTitle ? props.shortTitle : props.title ? props.title : <br/> }</WindowShortTitle>
      </WindowHeader>
      { props.children }
    </WindowContainer>
  )
}

export default Window;