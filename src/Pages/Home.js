import React from 'react';
import styled from 'styled-components';

import Hero from './../Components/Hero';
import IdolThumbnail from './../Components/Idol/Thumbnail';
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
  <div>
    <Hero />
    <Section>
      <SectionTitle>急上昇<SectionSubTitle>10分更新</SectionSubTitle></SectionTitle>
      <IdolThumbnails>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
        </li>
      </IdolThumbnails>
    </Section>
    <Section>
      <SectionTitle>声が聞ける</SectionTitle>
      <IdolThumbnails>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
        <li>
          <IdolThumbnail artistid={4940} artist="ao yamato" image="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" hasvoice />
        </li>
      </IdolThumbnails>
    </Section>
    <Footer />
  </div>
);

export default Home;