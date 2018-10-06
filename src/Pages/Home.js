import React from 'react';
import styled from 'styled-components';
import IdolThumbnail from './../Components/Idols/Thumbnail';
import Navbar from '../Components/Navbar';

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  height: 60px;
  background: #fff;
`;

const ContentArea = styled.div`
  margin-top: 60px;
`

const Home = () => (
  <ContentArea>
    <Header>
      <Navbar account />
    </Header>
    <IdolThumbnail size="lg" id="4940" unitid="728" unit="Niji no Conquistador" name="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
  </ContentArea>
);

export default Home;