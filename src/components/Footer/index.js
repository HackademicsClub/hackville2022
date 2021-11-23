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

  @media only screen and (max-width: 747px) {
    flex-direction: column;
  }
`

const SocialIcon = styled.img`
  width: 70px;
  height: 70px;
`

const Footer = () => (
  <StyledFooter>
    <HelpfulLinks>
      <Link href="mailto:sheridanhackville@gmail.com">Contact Us</Link>
      <Link href="https://www.hackademics.club" target='_blank'>Hackademics</Link>
      <Link href="https://hackville.io/Hackville_2022_Sponsorship_Package.pdf">Sponsorship Package</Link>
      <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Code of Conduct</Link>
    </HelpfulLinks>
    <Socials>
      <a href='https://www.facebook.com/groups/hackademicsclub' target='_blank'>
        <SocialIcon src={FacebookSocialImage}/>
      </a>
      <a href='https://www.instagram.com/hackademicsclub/' target='_blank'>
        <SocialIcon src={InstagramSocialImage}/>
      </a>
      <a href='https://www.linkedin.com/company/hackademics-club/about/' target='_blank'>
        <SocialIcon src={LinkedInSocialImage}/>
      </a>
    </Socials>
  </StyledFooter>
)

export default Footer;