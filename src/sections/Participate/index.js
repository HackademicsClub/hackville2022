import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import ParticipateCard from '../../components/ParticipateCard';
import Timeline from '../../components/Timeline';
import Window from '../../components/Window';

// Assets
import PinkBackground from '../../images/backgrounds/bg-pink.png';
import ParticipateImage from '../../images/participate.png';
import PeopleImage from '../../images/people.svg';
import PrizeImage from '../../images/prize.svg';
import ProjectImage from '../../images/project.svg';
import { WindowLayout } from '../../components/Window/styles';

const ParticipateIcon = styled.img`
  width: 231px;
  height: 126px;
  border: 2px solid #000000;
  border-radius: 10px;

  @media only screen and (max-width: 478px) {
    width: 144px;
    height: 144px;
  }

  @media (max-width: 767px) and (min-width: 477px) {
    width: 119px;
    height: 119px;
  }
`

const WhyParticipateText = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1em;
  font-size: 1em;

  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    font-size: 14px;
  }
`
const ParticipateWindowLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em;
`

const ParticipateContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em;

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 6em;
  }

  @media only screen and (max-width: 478px) {
    margin: 6em;
  }
`


const Participate = () => (
  <Section id='participate' background={PinkBackground} justifyContent='space-evenly' >
    <Container>
      <Window width="653px" mediumViewWidth="380px" mobileWidth="380px" margin="0 2px 0.8em 0">
        <WindowLayout>
          <ParticipateIcon src={ParticipateImage}/>
          <WhyParticipateText>
          Over 36 hours, students from around the world come together to tackle innovative problems. Come for the prizes, networking opportunities, and a once-in-a-lifetime learning experience!
          </WhyParticipateText>
        </WindowLayout>
      </Window>
      <Window title="Why Participate?"  mobileWidth="380px">
        <ParticipateWindowLayout>
          <ParticipateContainer>
            <ParticipateCard title='Make connections' text='We had over 100 hackers last year from all backgrounds
            — you’re sure to meet like-minded students and form lifelong friendships.'
            image={PeopleImage}/>
            <ParticipateCard title='Build something cool' text='With exciting challenges to inspire you, the possibilities are endless.'
            image={ProjectImage}/>
            <ParticipateCard title='Win amazing prizes' text='Last year, we gave away more than $10,000 in prizes — and we have lots to give away this year!'
            image={PrizeImage}/>
          </ParticipateContainer>
          <Timeline/>
        </ParticipateWindowLayout>
      </Window>
    </Container>
  </Section>
)

export default Participate;