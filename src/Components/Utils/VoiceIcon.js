import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VoiceIconArea = styled.span`
  background: linear-gradient(to right, #f38ec3, #f26687);
  border-radius: 50%;
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 4px 5px;
  z-index: 9;
`;

const VoiceIcon = () => (
  <VoiceIconArea>
    <FontAwesomeIcon icon="volume" fixedWidth inverse />
  </VoiceIconArea>
)

export default VoiceIcon;