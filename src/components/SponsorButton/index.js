import styled from 'styled-components';
import Button from '../Button';

const SponsorButton = styled(Button)`
  margin-bottom: 8px;
  background-color: #B7C5F6;
  /* padding: 35px 70px 35px 70px; */
  border: 3px solid black;
  border-radius: 10px;
  box-shadow: 2px 0px 0px black;
  padding: 1em;

  &:hover {
    background-color: #A5B1DD;
    cursor: pointer;
  }

  @media (max-width: 767px) and (min-width: 477px) {
    margin: 3px;
    padding: 1em;
  }
`

export default SponsorButton;