import React from 'react';
import styled from 'styled-components';

import Link from './../Utils/Link';

import AppstoreImg from './../../Images/dl_appstore.png';
import PlaystoreImg from './../../Images/dl_googleplay.png';

const FooterArea = styled.footer`
  width: 100%;
  padding: 50px 0;
  background: #fff;
`;
const FooterContainer = styled.div`
  margin: 0 30px;
`;

const FooterAppDl = styled.ul`
  padding-left: 0;
  display: flex;
  align-items: center;

  li {
    margin-left: 10px;
    list-style: none;
    :first-child {
      margin-left: 0;
    }
  }
`;
const DownloadLink = styled.a`
  display: block;
  text-indent: -9999px;
  transition: all 0.3s ease;
  cursor: pointer;

  height: 30px;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
`;
const AppStoreLink = styled(DownloadLink)`
  width: 92px;
  background-image: url(${AppstoreImg});
`;
const PlayStoreLink = styled(DownloadLink)`
  width: 100px;
  background-image: url(${PlaystoreImg});
`;

const FooterLinkArea = styled.div`
  margin: 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FooterLinks = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin: 0 0 0 30px;
    list-style: none;
    :first-child {
      margin-left: 0;
    }
  }
`;

const CopyrightTxt = styled.p`
  font-size: 9px;
  color: #8995a3;
`;

const Footer = props => (
  <FooterArea>
    <FooterContainer>
      <FooterAppDl>
        <li><AppStoreLink href="https://itunes.apple.com/jp/app/id931749940?mt=8" target="_blank">App Store</AppStoreLink></li>
        <li><PlayStoreLink href="https://play.google.com/store/apps/details?id=jp.fogg.cheerz.app" target="_blank">Google Play</PlayStoreLink></li>
      </FooterAppDl>

      <FooterLinkArea>
        <FooterLinks>
          <li><Link color="#8995a3" href="/about">ABOUT CHEERZ</Link></li>
          <li><Link color="#8995a3" href="/contact">お問い合わせ</Link></li>
          <li><Link color="#8995a3" href="/faq">FAQ</Link></li>
          <li><Link color="#8995a3" href="/term">利用規約</Link></li>
          <li><Link color="#8995a3" href="/privacy">プライバシーポリシー</Link></li>
          <li><Link color="#8995a3" href="/shikinkessaihou">資金決済法に基づく表記</Link></li>
          <li><Link color="#8995a3" href="/tokusho">特商法に基づく表記</Link></li>
        </FooterLinks>
        <CopyrightTxt>©CHEERZ</CopyrightTxt>
      </FooterLinkArea>
    </FooterContainer>
  </FooterArea>
);

export default Footer;