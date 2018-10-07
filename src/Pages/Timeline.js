import React from 'react';
import styled from 'styled-components';

import Navbar from '../Components/Navbar';
import Item from '../Components/Idols/Item';

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
  padding-top: 60px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 30px;
`;

const FeedSelect = styled.section`
  background: #e8e9ea;
  padding: 3px 30px 13px;

  display: flex;
  flex-wrap: wrap;
`;
const FeedBtn = styled.a`
  text-decoration: none;

  display: block;
  height: 22px;
  margin: 10px 0 0 10px;
  padding: 5px 14px;
  border-radius: 11px;
  font-size: 10px;
  text-align: center;
  cursor: pointer;

  background: ${props => props.selected ? '#f38ec3' : '#f1f4f6'};
  color: ${props => props.selected ? '#fff' : '#8995a3'};

  :hover {
    opacity: .5;
  }

  :first-child {
    margin-left: 0;
  }
`;

const ItemList = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PickupArea = styled.div`
  flex: 1;
  max-width: 220px;
  margin: 30px 0 0 30px;
`;
const PickupBox = styled.div`
  margin: 10px 0 0;
`;
const PickupThumb = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const Timeline = () => (
  <ContentArea>
    <Header>
      <Navbar />
    </Header>
    <FeedSelect>
      <FeedBtn href="#" selected>すべて</FeedBtn>
      <FeedBtn href="#" data-key="favorite" data-value="1">お気に入り</FeedBtn>
      <FeedBtn href="#" data-key="content_category" data-value="64">Miss iD</FeedBtn>
      <FeedBtn href="#" data-key="voice" data-value="1">ちあボイス付き</FeedBtn>
      <FeedBtn href="#" data-key="mylist" data-value="1">CHEERした投稿</FeedBtn>
    </FeedSelect>
    <Container>
      <ItemList>
        <Item
          itemid={583119}
          date="2018.10.7"
          postedtime={1538922814}
          artistid={271}
          artist="Kikima Aya"
          unitid={51}
          unit="TSURI×BIT"
          cheers={2}
          comment="こんばんはーーー！！！今日は癒されまくりました..."
        />
        <Item
          itemid={583119}
          date="2018.10.7"
          postedtime={1538922814}
          artistid={271}
          artist="Kikima Aya"
          unitid={51}
          unit="TSURI×BIT"
          cheers={2}
          comment="こんばんはーーー！！！今日は癒されまくりました..."
        />
        <Item
          itemid={583119}
          date="2018.10.7"
          postedtime={1538922814}
          artistid={271}
          artist="Kikima Aya"
          unitid={51}
          unit="TSURI×BIT"
          cheers={2}
          comment="こんばんはーーー！！！今日は癒されまくりました..."
        />
        <Item
          itemid={583119}
          date="2018.10.7"
          postedtime={1538922814}
          artistid={271}
          artist="Kikima Aya"
          unitid={51}
          unit="TSURI×BIT"
          cheers={2}
          comment="こんばんはーーー！！！今日は癒されまくりました..."
        />
        <Item
          itemid={583119}
          date="2018.10.7"
          postedtime={1538922814}
          artistid={271}
          artist="Kikima Aya"
          unitid={51}
          unit="TSURI×BIT"
          cheers={2}
          comment="こんばんはーーー！！！今日は癒されまくりました..."
        />
        <Item
          itemid={583119}
          date="2018.10.7"
          postedtime={1538922814}
          artistid={271}
          artist="Kikima Aya"
          unitid={51}
          unit="TSURI×BIT"
          cheers={2}
          comment="こんばんはーーー！！！今日は癒されまくりました..."
        />
      </ItemList>
      <PickupArea>
        <PickupBox>
          <a href="http://miss-id.jp/intermediate/2019/finalist_2">
            <PickupThumb>
              <img src="https://d1jo5b1m9v3ic.cloudfront.net/pickup/img/p8531/db2d0606116290e82c09703c9eb587e6.jpeg?timestamp=1536640376" alt="Miss iD"/>
            </PickupThumb>
          </a>
        </PickupBox>
      </PickupArea>
    </Container>
  </ContentArea>
);

export default Timeline;