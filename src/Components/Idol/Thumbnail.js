import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';

import styled from 'styled-components';

import Link from '../Utils/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThumbnailLink = styled(Link)`
  a {
    color: #f38ec3;
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
  
    :hover {
      opacity: ${props => props.size === "lg" ? ".5" : "1"};
    }
  }
`;
const ImageDiv = styled.div`
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    bottom: 40px;
    right: 10px;
    z-index: 10;
  }

  :after {
    position: absolute;
    bottom: 30px;
    left: 0;
    z-index: 2;
    content: '';
    width: 100%;
    height: 50%;
    background: ${props => props.hasvoice ? 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.3) 100%)' : ''};
  }
`;
const Image = styled.img`
  border-radius: ${props => props.size === "lg" ? "14px" : "4px"};
  background: #ebedee;
  max-width: 100%;
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
const IdolThumbnail = props => {
  if (props.size === 'lg') {
    return (
      <div>
        <ThumbnailLink>
          <RRLink to={`artist/${props.artistid}`}>
            <ImageDiv hasvoice={props.hasvoice}>
              <Image size={props.size} src={props.image} alt={props.artist} />
              {
                props.hasvoice ? <FontAwesomeIcon icon="volume" inverse size="2x" /> : ''
              }
            </ImageDiv>
          </RRLink>
        </ThumbnailLink>
        <Unit unitid={props.unitid}><RRLink to={`unit/${props.unitid}`}>{props.unit}</RRLink></Unit>
        <Link color="#f38ec3"><RRLink to={`artist/${props.artistid}`}><Name>{props.artist}</Name></RRLink></Link>
      </div>
    )
  }

  return (
    <ThumbnailLink>
      <RRLink to={`artist/${props.artistid}`}>
        <ImageDiv hasvoice={props.hasvoice}>
          <Image size={props.size} src={props.image} alt={props.artist} />
          {
            props.hasvoice ? <FontAwesomeIcon icon="volume" inverse size="2x" /> : ''
          }
        </ImageDiv>
        <Name>{props.artist}</Name>
      </RRLink>
    </ThumbnailLink>
  )
};

IdolThumbnail.propTypes = {
  /** Cheerz Idol ID */
  artistid: PropTypes.number.isRequired,
  /** Idol Name */
  artist: PropTypes.string.isRequired,
  /** Cheerz Unit ID */
  unitid: PropTypes.number,
  /** Unit Name */
  unit: PropTypes.string,
  /** Idol Image */
  image: PropTypes.string.isRequired,
  /** Controls size of thumbnail */
  size: PropTypes.oneOf(['""', 'lg']),
  /** Decides whether to show voice icon */
  hasvoice: PropTypes.bool
};

export default IdolThumbnail;