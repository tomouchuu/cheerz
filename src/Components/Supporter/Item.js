import React from 'react';
import styled from 'styled-components';

const SupporterArea = styled.li`
  list-style: none;
  margin: 10px 0 0;
`;
const SupporterContainer = styled.dl`
  display: flex;
  align-items: center;
`;
const SupporterImage = styled.dt`
  background: linear-gradient(to right, #9bbfec, #bab0e4, #e9ade3);
  margin: 0;
  padding: 2px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
`;

const SupporterDetails = styled.dd`
  margin: 0 0 0 10px;
`;
const SupporterName = styled.p`
  margin: 0;
`;
const SupporterNumber = styled.p`
  margin: 0;
  font-size: 10px;
  color: #cbd1d8;
`;

const SupporterItem = () => (
  <SupporterArea>
    <SupporterContainer>
      <SupporterImage>
        <img src="https://d1jo5b1m9v3ic.cloudfront.net/user/profile/u298960fd1fabaada9837b2feec5d27bc0dee1eb-small.jpg" />
      </SupporterImage>
      <SupporterDetails>
        <SupporterName>thomas</SupporterName>
        <SupporterNumber>会員No.3</SupporterNumber>
      </SupporterDetails>
    </SupporterContainer>
  </SupporterArea>
);

export default SupporterItem;