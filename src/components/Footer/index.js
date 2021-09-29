import React from 'react';
import styled from 'styled-components';

// Assets
import FacebookSocialImage from '../../images/socials/fb.svg';
import InstagramSocialImage from '../../images/socials/ig.svg';
import LinkedInSocialImage from '../../images/socials/li.svg';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242424;
  padding: 3em;
  
`

const HelpfulLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const Link = styled.a`
  color: white;
  font-size: 15px;
  font-weight: 900;
  text-decoration: none;

  :not(:last-child) {
    margin-bottom: 1.8em;
  }
`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
`

const SocialIcon = styled.img`
  width: 70px;
  height: 70px;
`

const Footer = () => (
  <StyledFooter>
    <HelpfulLinks>
      <Link href="mailto:sheridanhackville@gmail.com">Contact Us</Link>
      <Link href="https://hackademics.club">Hackademics</Link>
      <Link>Sponsorship Package</Link>
      <Link>Code of Conduct</Link>
    </HelpfulLinks>
    <Socials>
      <SocialIcon src={FacebookSocialImage}/>
      <SocialIcon src={InstagramSocialImage}/>
      <SocialIcon src={LinkedInSocialImage}/>
    </Socials>
  </StyledFooter>
)

export default Footer;