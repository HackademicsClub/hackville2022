import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';


const Sponsor = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 2em;
  margin: 0.5em;
  display: flex;
  align-items: center;
  & > * {
    flex-grow: 1;
  }

`

const Layout = styled.div`
  display: flex;
  overflow: auto;
`

const PastSponsorGrid = () => (
  <Layout>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/rbc-logo.png' alt='' height={100} width={100} layout='fixed' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/mlh.png' alt='' height={100} width={100} layout='fixed' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/adobe--logo.png' alt='' height={100} width={100} layout='fixed' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/github-logo.png' alt='' height={100} width={100} layout='fixed' transformOptions={{fit: 'inside'}}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/VoiceFlow.png' alt='' layout='fixed' height={173} width={173} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/SDG.png' alt='' layout='fixed' height={100} width={100} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/IBM-logo.png' alt='' layout='fixed' height={100} width={100} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/redbull-logo.png' alt='' layout='fixed' height={100} width={100} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/sheridan.png' alt='' layout='fixed' height={100} width={100} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/SSU.jpeg' alt='' layout='fixed' height={100} width={100} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
    <Sponsor>
      <StaticImage src='../../images/past-sponsors/office-for-sustainability.jpeg' alt='' layout='fixed' height={100} width={100} transformOptions={{
        fit: 'inside'
      }}/>
    </Sponsor>
  </Layout>
)

export default PastSponsorGrid;