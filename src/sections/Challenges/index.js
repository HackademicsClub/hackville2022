import React from 'react';
import styled from 'styled-components';
import ChallengeStatistics from '../../components/ChallengeStatistics';
import Section from '../../components/Section';
import Window from '../../components/Window';

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
const LastYearWindowContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
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

const WindowContents = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 12rem;

  @media only screen and (max-width: 991px) {
    padding: 4em;
  }
`

const Challenge = () => (
  <Section id='challenges' bgColor='#ADDFD5'>
    <Container>
      <Window title="">
        <LastYearWindowContent>
          <HeaderText>Last year, we had...</HeaderText>
          <ChallengeStatistics/>
        </LastYearWindowContent>
      </Window>
      <Window title="Challenges" margin='1.5em'>
        <WindowContents>
          <h1>Challenges coming soon!</h1>
        </WindowContents>
      </Window>
    </Container>
  </Section>
)

export default Challenge;