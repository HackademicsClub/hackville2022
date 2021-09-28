import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';


// Assets
import HackademicsIcon from '../../images/ha-white-icon.svg'

const hackademicsIcon = {
  cursor: 'pointer',
  width: '49px',
  height:'49px',
  padding: '5px',
  border: '2.5px solid white',
  boxShadow: '3px 0px 0px white',
  borderRadius: '8px'
}

const Navigation = styled.nav`
  background-color: #242424;
  display: flex;
  flex-direction: row;
  color: white;
  padding: 30px 8%;
  align-items: center;
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


  @media only screen and (max-width: 768px) {
    display: none;
  }
`


const Header = () => {
  return(
    <Navigation>
      <a>
        <img style={hackademicsIcon} src={HackademicsIcon} alt="Hackademics"></img>
      </a>
      <NavLinks>
        <AnchorLink>Register</AnchorLink>
        <AnchorLink>Why?</AnchorLink>
        <AnchorLink>Challenge</AnchorLink>
        <AnchorLink>Sponsors</AnchorLink>
        <AnchorLink>FAQ</AnchorLink>
      </NavLinks>
    </Navigation>
  )
}

export default Header;