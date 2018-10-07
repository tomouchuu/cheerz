import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CoverBG from './../../Images/cover_bg.jpg';

import Signedout from './Signedout';
import Events from './Events';
import SignedoutInformation from './SignedoutInformation';
import Information from './Information';

const Cover = styled.section`
  position: relative;
  width: 100%;
  background-size: cover !important;
  background: url(${CoverBG}) top center no-repeat;

  height: ${props => props.issignedin ? '' : 'auto'};

  :before {
    content: '';
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: ${props => props.issignedin ? 'flex' : 'block'};
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  padding: ${props => props.issignedin ? '40px 0' : '80px 0 35px'};
  width: ${props => props.issignedin ? '80%' : '50%'};
`;

const Hero = props => (
  <Cover issignedin={props.issignedin}>
    <Container issignedin={props.issignedin}>
      {
        !props.issignedin ? <Signedout /> : ''
      }

      {
        props.issignedin ? <Information /> : <SignedoutInformation />
      }

      <Events issignedin={props.issignedin} />
    </Container>
  </Cover>
);

Hero.propTypes = {
  issignedin: PropTypes.bool
}

export default Hero;