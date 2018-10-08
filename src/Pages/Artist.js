import React from 'react';
import styled from 'styled-components';

import MockTimelineData from './../MockData/ArtistTimeline.json';

import Hero from './../Components/Idol/Hero';
import Timeline from '../Components/Timeline';
import Supporters from '../Components/Supporter';
import CommunitySidebar from '../Components/Community/CommunitySidebar';
import FanSidebar from '../Components/Fan/FanSidebar';

const Container = styled.div`
  display: flex;
`;
const TimelineContainer = styled.div`
  margin: 0;
`;
const RightColumn = styled.div`
  flex: 1;
  margin: 0 30px;
  min-width: 220px;

  > div {
    margin: 30px 0 0;
  }
`;

class Artist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const results = MockTimelineData.Result.items;
    this.setState({
      posts: results
    });
  }

  render() {
    return (
      <div>
        <Hero />
        <Container>
          <TimelineContainer>
            <Timeline posts={this.state.posts} />
          </TimelineContainer>
          <RightColumn>
            <Supporters />
            <CommunitySidebar />
            <FanSidebar />
          </RightColumn>
        </Container>
      </div>
    )
  }
}

export default Artist;