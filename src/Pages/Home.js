import React from 'react';
import styled from 'styled-components';

import Header from './../Components/Utils/Header';
import ContentArea from './../Components/Utils/Content';
import Navbar from '../Components/Navbar';
import Hero from './../Components/Hero';
import IdolThumbnail from './../Components/Idols/Thumbnail';
import Footer from './../Components/Footer';

const Section = styled.section`
  margin: 30px;
`;
const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: normal;
`;
const SectionSubTitle = styled.span`
  margin: 0 0 0 8px;
  font-size: 11px;
  color: #cbd1d8;
`;

const IdolThumbnails = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  padding-left: 0;
  width: 100%;

  li {
    list-style: none;
    flex: 1 1 auto;
    margin-left: 10px;
    :first-child {
      margin-left: 0;
    }
  }
`;

// @TODO: React Router this
const Home = () => (
  <ContentArea>
    <Header>
      <Navbar account={{image: "https://d1jo5b1m9v3ic.cloudfront.net/user/profile/u298960fd1fabaada9837b2feec5d27bc0dee1eb-small.jpg"}} />
    </Header>
    <Hero issignedin />
    <Section>
      <SectionTitle>急上昇<SectionSubTitle>10分更新</SectionSubTitle></SectionTitle>
      <IdolThumbnails>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
      </IdolThumbnails>
    </Section>
    <Section>
      <SectionTitle>声が聞ける</SectionTitle>
      <IdolThumbnails>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail id={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
      </IdolThumbnails>
    </Section>
    <Footer />
  </ContentArea>
);

export default Home;