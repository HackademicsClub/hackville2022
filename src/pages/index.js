import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';
import Header from '../components/Header';

// Sections
import Register from '../sections/Register';
import Participate from '../sections/Participate';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Open Sans', sans-serif;
  }
`

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Hackville 2022</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>        
      </Helmet>
      <GlobalStyle></GlobalStyle>
      <Header/>
      <main>
        <Register/>
        {/* <Participate/> */}
      </main>
    </>

  )
}

export default IndexPage
