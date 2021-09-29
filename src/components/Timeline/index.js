import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.ul`
  border-radius: 12px;
  position: relative;
  list-style: none;
  padding: 0;

  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    display: none;
  }
`

const TimelineItem = styled.li`
  padding-bottom: 8rem;
  border-left: 4px solid #F8B0C8;
  position: relative;
  padding-left: 30px;
  margin-left: 3em;
  margin-right: 3em;
  list-style: none;
  width: 200px;

  &::before {
    content: '';
    width: 32px;
    height: 32px;
    background: #F8B0C8;
    border: 2px solid black;

    border-radius: 50%;
    position: absolute;
    left: -18px;
    top: 0px;
  }

  &:last-child {
    border: 0;
    padding-bottom: 0;
    left: 4px;
  }
`

const TimelineItemTitle = styled.h2`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 1em;

  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    font-size: 14px;
  }
`

const TimelineItemText = styled.h2`
  font-size: 17px;
  font-weight: normal;

  @media only screen and (max-width: 478px), (max-width: 767px) and (min-width: 477px) {
    font-size: 14px;
  }
`


const Timeline = () => (
  <TimelineContainer>
    <TimelineItem>
      <TimelineItemTitle>Day 1 (6 hr)</TimelineItemTitle>
      <TimelineItemText>Opening Ceremony Workshops & Events Check in with Mentors</TimelineItemText>
    </TimelineItem>
    <TimelineItem>
      <TimelineItemTitle>Day 2 (24 hr)</TimelineItemTitle>
      <TimelineItemText>Ideation / Building Workshops & Events Check in with Mentors</TimelineItemText>
    </TimelineItem>
    <TimelineItem>
      <TimelineItemTitle>Day 3 (6 hr)</TimelineItemTitle>
      <TimelineItemText>Check in with Mentors</TimelineItemText>
      <TimelineItemText>Judging</TimelineItemText>
      <TimelineItemText>Closing Ceremony</TimelineItemText>
    </TimelineItem>
  </TimelineContainer>
)

export default Timeline;