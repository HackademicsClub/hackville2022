import React from 'react';
import styled from 'styled-components';

// Assets
import PeopleImage from '../../images/people.svg';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FCE4EC;
  border: 2px solid #000000;
  padding: 2em;
  flex: 50%;
  max-width: 520px;
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`
const CardContent = styled.div`
  margin-left: 1em;  
`

const CardHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`
const CardText = styled.p`
  font-size: 17px;
`

// Allow width & height to be passed
const PeopleIcon = styled.img`
  border: 2px solid #191717;
  border-radius: 12px;
  box-shadow: 2px 0px 0px black;
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