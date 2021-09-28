import React from 'react';
import styled from "styled-components"

export const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #050605;
  border-radius: 6px;
  box-shadow: 2px 0px 0px black;
  background-color: white;
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
`

export const WindowContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: row;
`

