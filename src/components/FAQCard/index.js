import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  border: 2px solid black;
  box-shadow: 2px 0px 0px black;
  padding: 1em;
  max-width: 500px;
  

  :not(:last-child) {
    margin-bottom: 0.5em;
  }
`

const FAQQuestion = styled.div`
  font-size: 13px;
  font-weight: 800;
  padding: 0;
`

const FAQAnswer = styled.div`
  font-size: 14px;
  padding: 0.5em 0.5em 0 0.5em;

  display: ${(props => props.collapsed ? 'block' : 'none')};
`


const FAQCard = ({collapsed, faq}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <Card>
        <FAQQuestion onClick={() => setIsCollapsed(!isCollapsed)}>
          ➕ { faq.frontmatter.title }
        </FAQQuestion>
        <FAQAnswer collapsed={isCollapsed} aria-expanded={isCollapsed} dangerouslySetInnerHTML={{ __html: faq.html}}>
        </FAQAnswer>
      </Card>
    </>
  )
}

export default FAQCard;

