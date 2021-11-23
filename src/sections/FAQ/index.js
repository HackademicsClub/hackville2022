import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import FAQCard from '../../components/FAQCard';
import Section from '../../components/Section';
import Window from '../../components/Window';
import { WindowLayout } from '../../components/Window/styles';

// Assets
import FAQImage from '../../images/faq.png';
import GreyBackground from '../../images/backgrounds/bg-grey.png';

const FAQWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  max-height: 793px;
  margin-left: 1em;
  max-width: 500px;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em;

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 6em;
  }

  @media only screen and (max-width: 478px) {
    margin: 6em;
  }
`

const FAQIcon = styled.img`
  border: 2px solid black;
  width: 478px;
  height: 793px;
  border-radius: 10px;

  @media (max-width: 900px) and (min-width: 489px) {
    display: none;
  }

  @media only screen and (max-width: 490px) {
    display: none;
  }
`

const FAQ = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const FAQs = data.allMarkdownRemark.edges.map(edge => <FAQCard key={edge.node.id} faq={edge.node}/>);

  return (
    <Section id='faq' bgColor='#EEEEEE' background={GreyBackground}>
      <Container>
        <Window title='Frequently Asked Questions' shortTitle='FAQ' maxWidth='950px' minWidth='360px' mobileWidth='360px' mediumViewWidth="380px">
          <WindowLayout>
            <FAQIcon src={FAQImage}/>
            <FAQWindowContainer>
              {FAQs}
            </FAQWindowContainer>
          </WindowLayout>
        </Window>
      </Container>
    </Section>
  )
}

export default FAQ;