import React from 'react';
import styled from 'styled-components';

import Link from './../Utils/Link';

const Account = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  position: relative;
  height: 80px;

  :hover ul {
    top: 72px;
    visibility: visible;
    opacity: 1;
  }
`;
const AccountName = styled.p`
  font-size: 10px;
  color: #8995a3;
`
const ProfilePhoto = styled.div`
  position: relative;
  margin: 0 0 0 8px;
  width: 32px;
  height: 32px;

  img {
    vertical-align: middle;
    border: 0;

    object-fit: cover;
    width: 100%;
    height: 100%;
    font-family: 'object-fit: cover;';
    border-radius: 100%;
    overflow: hidden;
  }
`;
const NotificationDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #f38ec3;
  position: absolute;
  top: 2px;
  right: -3px;
`;

const DropNav = styled.ul`
  display: block;
  position: absolute;
  top: 46px;
  padding: 18px !important;
  right: -10px;
  width: 190px;
  background: #fff;
  border-radius: 6px;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  visibility: hidden;
  opacity: 0;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    right: 14px;
    top: -24px;
    width: 0px;
    height: 0px;
    margin: auto;
    border: 12px solid transparent;
    border-bottom: 12px solid #fff;
  }

  li {
    list-style-type: none;
    margin: 20px 0 0;
    font-size: 12px;

    &:first-child {
      margin: 0;
    }
  }
`;

const MessageCount = styled.span`
  display: inline-block;
  background: #f38ec3;
  border-radius: 8px;
  min-width: 15px;
  height: 15px;
  margin: 0 0 0 5px;
  padding: 0 5px;
  color: #fff;
  font-size: 9px;
  text-align: center;
  line-height: 15px;
`;

const AccountNavbar = (props) => (
  <Account>
    <AccountName>
      thom...
    </AccountName>
    <ProfilePhoto>
      <NotificationDot/>
      <img alt="User" src={props.account.image} />
    </ProfilePhoto>
    <DropNav>
      <li>
        <Link color="#8995a3" href="/message-box">メッセージボックス</Link>
        <MessageCount>5</MessageCount>
      </li>
      <li><Link color="#8995a3" href="/favorite-artist">お気に入り一覧</Link></li>
      <li><Link color="#8995a3" href="/support/list">サポート一覧</Link></li>
      <li><Link color="#8995a3" href="/point-purchase/list">ポイントの購入</Link></li>
      <li><Link color="#8995a3" href="/mypage">登録情報の変更</Link></li>
      <li><Link color="#8995a3" href="/cheer-history">CHEER実績</Link></li>
      <li><Link color="#8995a3" href="/notification-setting">通知設定</Link></li>
      <li><Link color="#8995a3" href="/creditcard">クレジットカード設定</Link></li>
      <li><Link color="#8995a3" href="/sms">SMS認証</Link></li>
      <li><Link color="#8995a3" href="/logout">ログアウト</Link></li>
    </DropNav>
  </Account>
);

export default AccountNavbar;
