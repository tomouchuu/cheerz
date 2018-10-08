import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 10px;
  color: #bcc6cf;
  font-weight: normal;
  margin: 0;
`;
const Fans = styled.ul`
  padding-left: 4px;
  margin-top: 13px;
`;
const FanItem = styled.li`
  margin: 0;
  list-style: none;
`;
const FanArea = styled.dl`
  display: flex;
  align-items: center;
`;
const FanImg = styled.dt`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const FanDetail = styled.dd`
  margin: 0 0 0 10px;
  font-size: 11px;
  span {
    font-size: 9px;
  }
`;

const FanSidebar = () => (
  <div>
    <Title>Fan Ranking</Title>
    <Fans>
      <FanItem>
        <FanArea>
          <FanImg><img src="https://d1jo5b1m9v3ic.cloudfront.net/user/profile/u298985fbbe6a60d721f19a08ac50e5154bc8e54-small.jpg" /></FanImg>
          <FanDetail>
            えいる<br/>
            <span>1282 cheer</span>
          </FanDetail>
        </FanArea>
      </FanItem>
    </Fans>
  </div>
);

export default FanSidebar;