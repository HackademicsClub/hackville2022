import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';


const Sponsor = styled.a`
  border: 2px solid black;
  border-radius: 10px;
  flex: 1 1 25%;
  align-items: center;
  justify-content: center;
  margin: 1em;
  padding: 0.5em;
  width: 100px;
  display: flex;
`

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #E7EBFC;
  overflow: auto;
  border: 2px solid #000000;
  border-radius: 10px;
`

const SponsorGrid = () => (
  <Layout>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/SSU.jpeg' alt='' width={200} height={200} layout='constrained' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/mlh.png' alt='' width={200} height={200} layout='constrained' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor href="http://hackp.ac/mlh-stickermule-hackathons">
      <StaticImage src='../../images/current-sponsors/sticker-mule-logo-dark-stacked.png' alt='' width={200} height={200} layout='constrained' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/current-sponsors/alumnioffice-logo.png' alt='' width={200} height={200} layout='constrained' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    {/* <Sponsor>
      <StaticImage src='../../images/past-sponsors/github-logo.png' alt='' width={200} height={200} layout='constrained' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/VoiceFlow.png' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/SDG.png' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/IBM-logo.png' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/redbull-logo.png' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/sheridan.png' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/SSU.jpeg' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }} />
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/office-for-sustainability.jpeg' alt='' width={200} height={200} layout='constrained' transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor> */}
  </Layout>
)

export default SponsorGrid;