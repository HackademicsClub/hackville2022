import React from 'react';
import styled from 'styled-components';
import CurrentSponsors from '../../components/CurrentSponsors';
import PastSponsorGrid from '../../components/PastSponsorGrid';
import Section from '../../components/Section';
import SponsorButton from '../../components/SponsorButton';
import Window from '../../components/Window';
import { WindowLayout } from '../../components/Window/styles';


const PastSponsorLayout = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  max-width: 800px;



  @media only screen and (max-width: 800px) {
    max-width: 380px;
  }

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em;
  justify-content: space-between;

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 6em;
  }

  @media only screen and (max-width: 478px) {
    margin: 6em;
  }
`

const SponsorsWindowLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;

  @media only screen and (max-width: 991px) {
    padding: 4em;
  }
`

const Sponsors = () => (
  <Section id='sponsors' bgColor='#B7C5F6'>
    <Container>
      <Window title='Sponsors' margin="0 2px 0.8em 0">
        <SponsorsWindowLayout>
          <SponsorButton text="Become a sponsor" />
          <CurrentSponsors/>
        </SponsorsWindowLayout>
      </Window>
      <Window title='Many thanks to our past sponsors!' shortTitle='💗 to our past sponsors!'>
        <PastSponsorLayout>
          <PastSponsorGrid/>
        </PastSponsorLayout>
      </Window>
    </Container>
  </Section>
)

export default Sponsors;