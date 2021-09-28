import React from 'react';
import Container from '../../components/Container';
import Window from '../../components/Window';
import ApplyButton from '../../components/Button'
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

  margin-top: -12em;

  @media (max-width: 767px) and (min-width: 477px) {
    margin-top: -18em;
  }

  @media only screen and (max-width: 478px) {
    margin-top: -30em;
  }
`

const Register = () => {
  return (
    <Container background={YellowBackground}>
      <Contents>
        <LogoContainer>
          <Hackademics src={HackademicsLogo}/>
          <PresentText>presents</PresentText>
        </LogoContainer>
        <Hackville src={HackvilleLogo}/>
        <DateText>January 27-29th 2022 / Virtual Hackathon</DateText>
        <SponsorText>Interested in sponsoring?</SponsorText>
        <Window title="Register">
          <RegisterIcon src={RegisterImage}/>
          <ButtonGroup>
            <ApplyButton text="Apply As Hacker" to="https://google.ca"/>
            <ApplyButton text="Apply As Mentor"/>
          </ButtonGroup>
        </Window>
      </Contents>
    </Container>
  )
}

export default Register;