import React from 'react';
import styled from 'styled-components';

import MockData from './../MockData/Unit.json';

import UnitProfile from './../Components/Units/Profile';
import UnitMember from './../Components/Units/Member';
import { FeedSelect, FeedBtn } from './../Components/Feed';
import UnitTimeline from '../Components/Units/Timeline';

const UnitMembers = styled.div`
  margin: 30px 0 0;
  padding: 30px 30px 60px;
  border-top: 1px solid #cacaca;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const UnitTimelineContainer = styled.div`
  margin: 0;
`;

class Unit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
      url: '',
      members: []
    }
  }

  componentDidMount() {
    this.setState(MockData);
  }

  render() {
    return (
      <div>
        <UnitProfile
          unit={this.state.name}
          unitimg={this.state.image}
          uniturl={this.state.url}
        />
        <UnitMembers>
          {
            this.state.members.map((member) => (
              <UnitMember
                key={member.id}
                artistid={member.id}
                artist={member.name}
                artistromanji={member.romanji}
                artistimage={member.image}
                totalcheers={member.totalcheers}
                photos={member.photos}
                favourites={member.favourites}
                text={member.text}
                extra={member.extra}
              />
            ))
          }
        </UnitMembers>
        <FeedSelect>
          <FeedBtn selected href="#" data-key="poster_ids" data-value="[4923,4932,4936,4934,4931,4940,4937,4935,4938,4933,4939,4941]">全て</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4923]">nagi nemoto</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4932]">miyu kataoka</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4936]">akari nakamura</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4934]">riko shimizu</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4931]">ayame okada</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4940]">ao yamato</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4937]">airi hiruta</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4935]">moe tsurumi</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4938]">karin matoba</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4933]">marina kumamoto</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4939]">nana yamasaki</FeedBtn>
          <FeedBtn href="#" data-key="poster_ids" data-value="[4941]">rio yamamoto</FeedBtn>
        </FeedSelect>
        <UnitTimelineContainer>
          <UnitTimeline />
        </UnitTimelineContainer>
      </div>
    )
  }
}

export default Unit;