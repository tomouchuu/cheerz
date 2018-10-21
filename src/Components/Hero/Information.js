import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './../Utils/Button';

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  flex: 1 1 auto;

  li {
    list-style: none;
    margin: 8px 0 0;
    :first-child {
      margin-top: 0;
    }
  }
`;
const InfoTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 11px;
    font-weight: normal;
    color: #fff;
    margin: 0;

    span {
      margin: 0 0 0 5px;
      font-size: 14px;
    }
  }
`;
const InfoButton = styled(Button)`
  width: 140px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 3px 0 0 8px;
  padding: 6px 10px;
  display: inline-block;
  border: 2px solid #fff;
  background: #fff;
  color: #596776;
  font-size: 10px;
  line-height: 1em;
  transform: scale(0.8, 0.8);
`;

const BonusPoints = styled.div`
  margin: 0 0 20px;
  color: #fff;
`;
const BonusPointsInfo = styled.p`
  position: relative;
  margin: 8px 0 0;
  line-height: 1.8em;

  span {
    color: #cbd1d8;
  }
`;

const MessageTxt = styled.div`
  p {
    position: relative;
    color: #fff;
    margin: 0;
  }
`;

const Information = props => (
  <InfoList>
    <li>
      <BonusPoints>
        <InfoTitle>
          <h3>TODAY'S BONUS<span><a href="/faq#faqcat10"><FontAwesomeIcon icon={["far", "question-circle"]} /></a></span></h3>
        </InfoTitle>
        <BonusPointsInfo>
          1件のお気に入り投稿がありました（1pt）<br/>
          1人の投稿を見ました（1pt）<br/>
          <span>※今日は1人の投稿をみてます</span>
          <InfoButton href="#">合計2ptを受け取る</InfoButton>
        </BonusPointsInfo>
      </BonusPoints>
    </li>

    <li>
      <MessageTxt>
        <InfoTitle>
          <h3>MESSAGE</h3>
        </InfoTitle>
        <p>メッセージが5件届いています<InfoButton href="/message-box">メッセージボックスへ</InfoButton></p>
      </MessageTxt>
    </li>
  </InfoList>
);

export default Information;