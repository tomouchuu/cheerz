import React from 'react';
import styled from 'styled-components';

import SupporterItem from './Item';
import { MoreBtn } from './../Utils/Button';

const SupporterArea = styled.div`
  background: linear-gradient(to right, #9bbfec, #bab0e4, #e9ade3);
  border-radius: 10px;
  padding: 5px;
`;
const SupporterContainer = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 15px;
`;
const SupporterHeading = styled.h3`
  font-size: 17px;
  color: #bd93e4;
  font-weight: normal;
`;
const SupporterMsg = styled.p`
  margin: 10px 0 0;
  a {
    font-size: 11px;
  }
`;
const SupporterBtnArea = styled.div`
  width: 100%;
  margin: 20px 0 0;
`;
const SupporterBtnMsg = styled.p`
  text-align: center;
  font-size: 11px;
  color: #bd93e4;
`;
const SupporterBtn = styled.a`
  text-align: center;
  background: linear-gradient(to right, #9bbfec, #bab0e4, #e9ade3);
  color: #fff;
  border: none;
  margin: 10px 0 0;
  display: inline-block;
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  font-size: 10px;
  line-height: 1em;
`;

const SupporterListArea = styled.div`
  margin: 40px 0 0;
`;
const SupporterListTitle = styled.h4`
  margin: 0;
  font-size: 11px;
  color: #bd93e4;
  font-weight: normal;
`;
const SupporterList = styled.ul`
  margin: 0;
  padding: 0;
`;

const Supporters = () => (
  <SupporterArea>
    <SupporterContainer>
      <SupporterHeading>大和派明桜党</SupporterHeading>
      <SupporterMsg>
        虹のコンキスタドール所属の「アーオ」こと大和明桜です！…
        <a href="/support/show/4940">MORE</a>
      </SupporterMsg>
      <SupporterBtnArea>
        <SupporterBtnMsg>月額500円から支援できます</SupporterBtnMsg>
        <SupporterBtn href="/support/show/4940">支援する</SupporterBtn>
      </SupporterBtnArea>
      <SupporterListArea>
        <SupporterListTitle>SUPPORTER</SupporterListTitle>
        <SupporterList>
          <SupporterItem />
        </SupporterList>
        <MoreBtn><a href="/artist/4940/supporter-list">MORE</a></MoreBtn>
      </SupporterListArea>
    </SupporterContainer>
  </SupporterArea>
);

export default Supporters;