import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E3F4F1;
  border: 2px solid black;
  border-radius: 10px;

  @media only screen and (max-width: 991px) {
    flex-direction: row;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em;

  @media only screen and (max-width: 991px) {
    padding: 1em;
    margin: 0;
  }
`

const StatisticText = styled.span`
  text-align: center;
  font-size: 17px;
  font-weight: bold;

  @media only screen and (max-width: 991px) {
    font-size: 13px;
  }
`

const ChallengeStatistics = () => (
  <IconsContainer>
    <IconContainer>
      <StaticImage src='../../images/people.svg' alt=""/>
      <StatisticText>100 hackers</StatisticText>
    </IconContainer>
    <IconContainer>
      <StaticImage src='../../images/project.svg' alt=""/>
      <StatisticText>23 projects</StatisticText>
    </IconContainer>
    <IconContainer>
      <StaticImage src='../../images/project.svg' alt=""/>
      <StatisticText>23 projects</StatisticText>
    </IconContainer>
    <IconContainer>
      <StaticImage src='../../images/prize.svg' alt=""/>
      <StatisticText>$4k projects</StatisticText>
    </IconContainer>
  </IconsContainer>
)

export default ChallengeStatistics;