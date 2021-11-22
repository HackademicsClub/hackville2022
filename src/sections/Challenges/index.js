import React from 'react';
import styled from 'styled-components';
import ChallengeStatistics from '../../components/ChallengeStatistics';
import Section from '../../components/Section';
import Window from '../../components/Window';
import TealBackground from '../../images/backgrounds/bg-teal.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5em;

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 6em;
  }

  @media only screen and (max-width: 478px) {
    margin: 6em;
  }

  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`
const LastYearWindowLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`
const HeaderText = styled.span`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1em;

  @media only screen and (max-width: 478px) {
    font-size: 14px;
    font-weight: 600;
  }
`

const ChallengesWindowLayout = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 12rem;

  @media only screen and (max-width: 991px) {
    padding: 4em;
  }
`

const Challenge = () => (
  <Section id='challenges' bgColor='#ADDFD5' background={TealBackground}>
    <Container>
      <Window title="">
        <LastYearWindowLayout>
          <HeaderText>Last year, we had...</HeaderText>
          <ChallengeStatistics/>
        </LastYearWindowLayout>
      </Window>
      <Window title="Challenges" margin='1.5em'>
        <ChallengesWindowLayout>
          <h1>Challenges coming soon!</h1>
        </ChallengesWindowLayout>
      </Window>
    </Container>
  </Section>
)

export default Challenge;