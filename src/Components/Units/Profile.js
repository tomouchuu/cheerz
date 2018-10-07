import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './../Utils/Button';

const ProfileArea = styled.div`
  margin: 0 30px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 9;
`;
const ProfileThumb = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Profile = styled.div`
  flex: 1;
  margin: 0 0 0 25px;
`;
const UnitName = styled.p`
  margin: 0;
  font-size: 24px;
  color: #f38ec3;
`;
const UnitLinkBtn = styled(Button)`
  margin: 10px 0 0 0;
  display: inline-block;
  border-radius: 30px;
  padding: 3px 10px;
`;

const UnitProfile = props => (
  <ProfileArea>
    <ProfileThumb>
      <img src={props.unitimg} alt={props.unit} />
    </ProfileThumb>
    <Profile>
      <UnitName>{props.unit}</UnitName>
      {
        props.uniturl ? <UnitLinkBtn href={props.uniturl} target="_blank">公式サイト</UnitLinkBtn> : ''
      }
    </Profile>
  </ProfileArea>
);

UnitProfile.propTypes = {
  unit: PropTypes.string.isRequired,
  unitimg: PropTypes.string.isRequired,
  uniturl: PropTypes.string
}

export default UnitProfile;