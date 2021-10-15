import React from 'react';
import styled from "styled-components"

export const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #050605;
  border-radius: 6px;
  box-shadow: 2px 0px 0px black;
  background-color: white;

  width: ${props => props.width ? props.width : ''};
  height: ${props => props.height ? props.height : ''};
  margin: ${props => props.margin ? props.margin : '0 2px 0 0'};

  max-width: ${props => props.maxWidth ? props.maxWidth : ''};

  @media only screen and (max-width: 478px) {
    max-width: ${props => props.mobileWidth ? props.mobileWidth : ''};
  }

  @media (max-width: 767px) and (min-width: 477px) {
    max-width: ${props => props.mediumViewWidth ? props.mediumViewWidth : ''};
  }
`

export const WindowHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #050605;
`
export const DotsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  margin-top: 0.2rem;
  z-index: 5;
`

export const WindowDot = styled.span`
  background-color: white;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  border: 2px solid #050605;
  margin-right: 4px;
`

export const WindowTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  flex: 1 0 auto;
  width: inherit;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

export const WindowShortTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  flex: 1 0 auto;
  width: inherit;
  display: none;

  @media only screen and (max-width: 480px) {
    display: block;
  }
`

// Use this layout as default if nothing needs to be done
// to the contents of a window.
export const WindowLayout = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: row;
`

