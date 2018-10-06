import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Link from '../Utils/Link';

const ThumbnailLink = styled(Link)`
  color: #f38ec3;
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;

  :hover {
    opacity: ${props => props.size === "lg" ? ".5" : "1"};
  }
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  border-radius: ${props => props.size === "lg" ? "14px" : "4px"};
  background: #ebedee;
`;
const Unit = styled.p`
  display: ${props => props.unitid ? "block" : "none"};
  margin: 5px 0 0;
  font-size: 9px;
  a {
    color: #cbd1d8;
    text-decoration: none;
  }
`;
const Name = styled.p`
  margin: 10px 0 0;
`;

/**
 * Thumbnail to link to Idol Page
 */
const IdolThumbnail = props => (
  <ThumbnailLink href={`artist/${props.id}`}>
    <ImageDiv>
      <Image size={props.size} src={props.image} alt={props.name} />
    </ImageDiv>
    <Unit unitid={props.unitid}><a href={`unit/${props.unitid}`}>{props.unit}</a></Unit>
    <Name>{props.name}</Name>
  </ThumbnailLink>
);

IdolThumbnail.propTypes = {
  /** Cheerz Idol ID */
  id: PropTypes.number.isRequired,
  /** Idol Name */
  name: PropTypes.string.isRequired,
  /** Cheerz Unit ID */
  unitid: PropTypes.number,
  /** Unit Name */
  unit: PropTypes.string,
  /** Idol Image */
  image: PropTypes.string.isRequired,
  /** Controls size of thumbnail */
  size: PropTypes.oneOf(['""', 'lg'])
};

export default IdolThumbnail;