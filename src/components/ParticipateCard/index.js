import React from 'react';
import styled from 'styled-components';

// Assets
import PeopleImage from '../../images/people.svg';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FCE4EC;
  border: 3px solid #000000;
  border-radius: 10px;
  padding: 2em;
  flex: 50%;
  max-width: 520px;

  &:not(:last-child) {
    margin-bottom: 2em;
  }

  @media (max-width: 767px) and (min-width: 477px) {
    width: 401px;
    padding: 10px;
  }

  @media (max-width: 991px) and (min-width: 768px) {
    padding: 1em;
  }
`
const CardContent = styled.div`
  margin-left: 1em;  
`

const CardHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    font-size: 14px;
  }
`
const CardText = styled.p`
  font-size: 17px;

  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    font-size: 14px;
  }
`

// Allow width & height to be passed
const PeopleIcon = styled.img`
  border: 2px solid #191717;
  border-radius: 12px;
  box-shadow: 2px 0px 0px black;
  width: 117px;
  height: 117px;
`



const ParticipateCard = ({ title, text }) => (
  <Card>
    <PeopleIcon src={PeopleImage}/>
    <CardContent>
      <CardHeader>{ title }</CardHeader>
      <CardText>
        { text }
      </CardText>
    </CardContent>
  </Card>
)

export default ParticipateCard;