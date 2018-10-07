import React from 'react';
import styled from 'styled-components';
import Button from './../Utils/Button';

const InformationArea = styled.div`
  width: 500px;
  margin: 38px auto 0;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  p {
    color: #fff;
    margin: 0;
  }
`;

const BtnArea = styled.div`
  margin: 38px 0 0;
  display: flex;
  justify-content: center;
`;
const AppBtnArea = styled(BtnArea)`
  margin: 10px 0 0;
`;
const BtnBox = styled.div`
  margin: 6px auto 0;
`;

const SignedoutInformation = props => (
  <InformationArea>
    <p>現在、新規登録は一時的にアプリからのみの受け付けとなっております。</p>
    <AppBtnArea>
      <BtnBox>
        <Button href="https://itunes.apple.com/jp/app/id931749940?mt=8" target="_blank">iOSの方はこちら</Button>
      </BtnBox>
      <BtnBox>
        <Button href="https://play.google.com/store/apps/details?id=jp.fogg.cheerz.app" target="_blank">Androidの方はこちら</Button>
      </BtnBox>
    </AppBtnArea>
  </InformationArea>
);

export default SignedoutInformation;