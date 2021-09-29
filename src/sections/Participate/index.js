import React from 'react';
import styled from 'styled-components';
import Section from '../../components/Section';
import ParticipateCard from '../../components/ParticipateCard';
import Timeline from '../../components/Timeline';
import Window from '../../components/Window';

// Assets
import PinkBackground from '../../images/backgrounds/bg-pink.png';
import ParticipateImage from '../../images/participate.png';

const ParticipateIcon = styled.img`
  width: 231px;
  height: 126px;
  border: 2px solid #000000;

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
  font-size: 17px;

  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    font-size: 14px;
  }
`

const WindowContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ParticipateContainer = styled.div`
  display: flex;
  flex-direction: column;
`


const Participate = () => (
  <Section background={PinkBackground}>
    <Window width="653px" mediumViewWidth="392px" mobileWidth="398px" margin='0 0 0.8em 0'>
      <ParticipateIcon src={ParticipateImage}/>
      <WhyParticipateText>
      Over 36 hours, students from around the world come together to tackle innovative problems. Come for the prizes, networking opportunities, and a once-in-a-lifetime learning experience!
      </WhyParticipateText>
    </Window>
    <Window title="Why Participate?"  mobileWidth="398px">
      <WindowContents>
        <ParticipateContainer>
          <ParticipateCard title='Make connections' text='We had over 100 hackers last year from all backgrounds
          — you’re sure to meet like-minded students and form lifelong friendships.'/>
          <ParticipateCard title='Build something cool' text='With exciting challenges to inspire you, the possibilities are endless.'/>
          <ParticipateCard title='Win amazing prizes' text='Last year, we gave away more than $10,000 in prizes — and we have lots to give away this year!'/>
        </ParticipateContainer>
        <Timeline/>
      </WindowContents>
    </Window>
  </Section>
)

export default Participate;