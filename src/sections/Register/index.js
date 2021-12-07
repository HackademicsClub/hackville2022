import React from 'react';
import Section from '../../components/Section';
import Window from '../../components/Window';
import ApplyButton from '../../components/ApplyButton'
import { ButtonGroup } from '../../components/Button/styles';
import { SponsorText, DateText, PresentText, LogoContainer, Hackademics, Hackville } from './styles';

// Assets
import YellowBackground from '../../images/backgrounds/bg-yellow.png';
import RegisterImage from '../../images/register.png';
import HackvilleLogo from '../../images/hackville-black-logo.svg';
import HackademicsLogo from '../../images/ha-wordmark-bw-black-SVG.svg';
import styled from 'styled-components';

const RegisterIcon = styled.img`
  height: 197px;
  width: 261px;
  border: 2px solid #000000;
  border-radius: 10px;

  @media (max-width: 767px) and (min-width: 477px) {
    display: none;
  }

  @media only screen and (max-width: 478px) {
    display: none;
  }
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 5em;

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 6em;
  }

  @media only screen and (max-width: 478px) {
    margin: 6em;
  }
`

const RegisterWindowLayout = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: row;
`

const Register = () => {
  return (
    <Section background={YellowBackground} id='register'>
      <Contents>
        <LogoContainer>
          <Hackademics src={HackademicsLogo}/>
          <PresentText>presents</PresentText>
        </LogoContainer>
        <Hackville src={HackvilleLogo}/>
        <DateText>January 14-16th 2022 / Virtual Hackathon</DateText>
        <SponsorText href="mailto:sheridanhackville@gmail.com">Interested in sponsoring?</SponsorText>
        <Window title="Register">
          <RegisterWindowLayout>
            <RegisterIcon src={RegisterImage}/>
            <ButtonGroup>
              <ApplyButton text="Apply As Hacker" to="https://hackville.io/apply"/>
              <ApplyButton text="Apply As Mentor" to="https://hackademics.typeform.com/mentor"/>
            </ButtonGroup>
          </RegisterWindowLayout>
        </Window>
      </Contents>
    </Section>
  )
}

export default Register;
