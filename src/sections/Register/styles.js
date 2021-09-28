import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
`

export const DateText = styled.span`
  margin: 2em 0 0 0;
  font-size: 24px;
  font-weight: 600;
  color: black;

  @media only screen and (max-width: 478px) {
    font-size: 14px;
  }
`

export const SponsorText = styled.span`
  margin: 2em 0 2em 0;
  font-size: 24px;
  font-weight: 600;
  color: black;
  text-decoration: underline;

  @media only screen and (max-width: 478px) {
    font-size: 14px;
  }
`

export const PresentText = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-left: 1em;
  line-height: 2em;

  @media only screen and (max-width: 478px) {
    font-size: 14px;
  }
`
// Images

export const Hackademics = styled.img`
  width: 276px;
  height: 46px;

  @media only screen and (max-width: 478px) {
    width: 144px;
    height: 24px;
  }

  @media (max-width: 767px) and (min-width: 477px) {
    width: 206px;
    height: 34px;
  }
`
export const Hackville = styled.img`
  width: 633px;
  height: 112px;

  @media only screen and (max-width: 478px) {
    width: 344px;
    height: 61px;
  }

  @media (max-width: 767px) and (min-width: 477px) {
    width: 473px;
    height: 84px;
  }
`