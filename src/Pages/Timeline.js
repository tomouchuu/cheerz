import React from 'react';
import styled from 'styled-components';

import MockData from './../MockData/Timeline.json';

import { FeedSelect, FeedBtn } from './../Components/Feed';
import TimelineComponent from './../Components/Timeline';

const Container = styled.div`
  display: flex;
  margin: 0 30px;
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

class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const results = MockData.Result.items;
    this.setState({
      posts: results
    });
  }

  render() {
    return (
      <div>
        <FeedSelect>
          <FeedBtn href="#" selected>すべて</FeedBtn>
          <FeedBtn href="#" data-key="favorite" data-value="1">お気に入り</FeedBtn>
          <FeedBtn href="#" data-key="content_category" data-value="64">Miss iD</FeedBtn>
          <FeedBtn href="#" data-key="voice" data-value="1">ちあボイス付き</FeedBtn>
          <FeedBtn href="#" data-key="mylist" data-value="1">CHEERした投稿</FeedBtn>
        </FeedSelect>
        <Container>
          <TimelineComponent posts={this.state.posts} />
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
      </div>
    )
  }
}

export default Timeline;
