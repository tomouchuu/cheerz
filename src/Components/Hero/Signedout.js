import React from 'react';
import styled from 'styled-components';

import Logo from './../../Images/logo_before_login.png';
import {Button, SubmitBtn} from './../Utils/Button';

const HeroTitle = styled.h2`
  margin: 0 auto;
  width: 351px;
  height: 91px;
  background: url(${Logo}) 0 0 no-repeat;
  text-indent: -9999px;
`;

const CountText = styled.p`
  margin: 20px 0 0;
  font-size: 14px;
  color: #fff;
  text-align: center;

  span {
    font-size: 21px;
    font-weight: 400;
  }
`;
const LeadText = styled.p`
  margin: 20px 0 0;
  font-size: 13px;
  color: #fff;
  text-align: center;
  line-height: 2em;
`;

const BtnArea = styled.div`
  margin: 38px 0 0;
  display: flex;
  justify-content: center;
`;
const BtnSmall = styled.div`
  margin: 7px 10px 0;
  p {
    text-align: center;
    font-size: 11px;
    color: #fff;
    margin: 0;
  }
`;
const BtnLarge = styled(BtnSmall)`
  margin: 0 10px 0;
`;
const BtnBox = styled.div`
  margin: 6px auto 0;
`;

const Signedout = props => (
  <div>
    <HeroTitle>WELCOME TO CHEERZ</HeroTitle>
    <CountText>参加アーティスト <span>1,000</span>人以上 - 総CHEER数 <span>1,825,489,278</span></CountText>
    <LeadText>
      CHEERZ（チアーズ）は<br/>
      女性アーティストやタレントと<br/>
      ファンの新しいカタチです<br/>
      <br/>
      いろんな形で応援できる<br/>
      もっと自由に もっと好きに
    </LeadText>

    <BtnArea>
      <BtnSmall>
          <p>もっと知りたい方</p>
          <BtnBox>
            <Button href="/about">ABOUT</Button>
          </BtnBox>
      </BtnSmall>
      <BtnLarge>
          <p>初めての方</p>
          <BtnBox>
            <SubmitBtn href="/user-register/create" off>新規登録はこちら</SubmitBtn>
          </BtnBox>
      </BtnLarge>
      <BtnSmall>
          <p>登録済みの方</p>
          <BtnBox>
            <Button href="/login">LOGIN</Button>
          </BtnBox>
      </BtnSmall>
    </BtnArea>
  </div>
);

export default Signedout