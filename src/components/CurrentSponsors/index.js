import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: #E7EBFC; */
  /* border: 2px solid #000000;
  border-radius: 10px; */
  padding: 12em;

  @media only screen and (max-width: 632px) {
    padding: 1em;
  }  
`


const CurrentSponsors = () => (
  <Container>
    <h1>
      Sponsors coming soon!
    </h1>
  </Container>
);

export default CurrentSponsors;