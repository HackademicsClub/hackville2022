import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";


// Assets
import HackademicsImage from '../../images/ha-white-icon.svg'

const HackademicsIcon = styled.img`
  cursor: pointer;
  width: 49px;
  height: 49px;
  padding: 5px;
  border: 2.5px solid white;
  box-shadow: 3px 0px 0px white;
  border-radius: 8px;
`


const Navigation = styled.nav`
  background-color: #242424;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 30px 8%;
  align-items: center;

  @media only screen and (max-width: 872px) {
    justify-content: center;
  }
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 40px;
  > * {
    padding: 0px 35px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
  }


  @media only screen and (max-width: 872px) {
    display: none;
  }
`


const Header = () => {
  return(
    <Navigation>
      <a href="https://www.hackademics.club/">
        <HackademicsIcon src={HackademicsImage} alt="Hackademics"></HackademicsIcon>
      </a>
      <NavLinks>
        <Link to='register'>Register</Link>
        <Link to='participate'>Why?</Link>
        {/* <Link>Challenge</Link>
        <Link>Sponsors</Link> */}
        <Link to='faq'>FAQ</Link>
      </NavLinks>
    </Navigation>
  )
}

export default Header;