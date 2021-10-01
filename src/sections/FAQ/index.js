import React from 'react';
import styled from 'styled-components';
import FAQCard from '../../components/FAQCard';
import Section from '../../components/Section';
import Window from '../../components/Window';

const FAQWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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


const FAQ = () => (
  <Section id='faq' bgColor='#EEEEEE'>
    <Container>
      <Window title='Frequently Asked Questions' shortTitle='FAQ' width='900px' mobileWidth='380px'>
        <FAQWindowContainer>
          <FAQCard question='What is a hackathon?' answer='A hackathon is a sprint-like event where innovators and inventors, usually students,
          can come together to solve real-world challenges using technology. They can be as long as an weekend.'/>
          <FAQCard question='I don’t know any coding. Can I still compete?' answer='Yes! As a beginner-friendly hackathon,
          we will set you up with the knowledge you need to start your first hackathon project, along with mentors.'/>
          <FAQCard question='How much does it cost?' answer='Hackville is completely free for 120 students! We want to make our event as accessible as possible,
          regardless of financial ability or otherwise.'/>
          <FAQCard question='How do teams work?' answer='We are allowing team sizes of up to 4 people on a team. You can come with a team, though we highly encourage creating your team at the event!
          At the very beginning of the hackathon we will hold a team building session for anybody who does not have a team at that time.'/>
          <FAQCard question='What can I build?' answer='Anything! We encourage any and all forms of solutions: whether it’s a game, app, hardware, AR, or anything at all.'/>
          <FAQCard question='Can I start working on my hack before the hackathon?' answer='No, you will be disqualified if a submitted project was worked on prior to the hackathon weekend.
          All coding and design work must be done during the hackathon weekend.'/>
          <FAQCard question='Do I need to bring anything?' answer='Laptop, pens, paper and any other tools you may use to solve problems.
          We will provide a safe, inclusive work collaboration environment for all teams.'/>                     
          <FAQCard question='Is there a code of conduct?' answer='Yes! We are using the MLH code of conduct. If you are interested in learning more click here.'/> 
          <FAQCard question='My question isn’t here, who can I contact?' answer='No worries,
          please e-mail us at sheridanhackville@gmail.com and we will be more than happy to answer your question!'/> 
        </FAQWindowContainer>
      </Window>
    </Container>
  </Section>
)

export default FAQ;