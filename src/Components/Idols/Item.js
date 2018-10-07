import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';

import styled from 'styled-components';
import SupporterOnlyImg from './../../Images/supporter_only.png'

const ItemArea = styled.div`
  margin: 30px 15px 0 15px;
  width: 220px;
`;

const ItemHead = styled.ul`
  display: flex;
  align-items: flex-end;
  width: 100%;

  margin: 0;
  padding: 0;
`;

const IdolThumb = styled.li`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  list-style: none;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const IdolDetailArea = styled.li`
  flex: 1;
  margin-left: 10px;
  list-style: none;
`;
const IdolDetail = styled.p`
  margin: 0;
  letter-spacing: 0.1em;
  a {
    transition: all 0.3s ease;
    cursor: pointer;
    :hover {
      opacity: .5;
    }
  }
`;
const IdolUnit = styled(IdolDetail)`
  font-size: 9px;
  a { color: #cbd1d8; }
`;
const IdolName = styled(IdolDetail)`
  font-size: 13px;
  a { color: #f38ec3; }
`;

const CheersCount = styled.li`
  font-size: 10px;
  transform: scale(0.9);
  letter-spacing: 0.1em;
  color: #cbd1d8;
  text-align: right;
  list-style: none;
`;

const ItemPhoto = styled.div`
  margin: 8px 0 0;
  position: relative;
`;

const Photo = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 14px;
  overflow: hidden;

  :before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  a {
    transition: all 0.3s ease;
    cursor: pointer;

    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    :hover {
      opacity: .5;
    }

    :before {
      content: '';
      background: ${props => props.issupporter ? `url(${SupporterOnlyImg}) 0 0 no-repeat` : ''};
      width: 150px;
      height: 51px;
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 75px);
      display: block;
      z-index: 1;
    }

    :after {
      content: '';
      background: ${props => props.issupporter ? 'rgba(0, 0, 0, 0.4)' : ''};
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      font-family: 'object-fit: cover;';
    }
  }
`;

const ItemBottom = styled.div`
  margin: 8px 0 0;
`;

const Comment = styled.p`
  font-size: 13px;
  letter-spacing: 0.1em;
  line-height: 1.43em;
`;

const DateTxt = styled.p`
  margin: 10px 0 0;
  font-size: 9px;
  letter-spacing: 0.1em;
  color: #cbd1d8;
  text-align: right;
`;

const Item = props => (
  <ItemArea data-item-id={props.itemid} data-posted-time={props.postedtime}>
    <ItemHead>
      <IdolThumb>
        <RRLink to={`/artist/${props.artistid}`}><img src={props.smallimage} alt={props.artist} /></RRLink>
      </IdolThumb>
      <IdolDetailArea>
        {
          props.unitid !== 0 ? <IdolUnit><RRLink to={`/unit/${props.unitid}`}>{props.unit}</RRLink></IdolUnit> : ''
        }
        <IdolName><RRLink to={`/artist/${props.artistid}`}>{props.artist}</RRLink></IdolName>
      </IdolDetailArea>
      <CheersCount id={`feedCheerCount${props.itemid}`}>{props.cheers}</CheersCount>
    </ItemHead>

    <ItemPhoto>
      <div className="voiceIcon"></div>
      <div className="itemInfo"></div>
      <Photo issupporter={props.issupporter}>
        <RRLink to={`#item-${props.itemid}`} className="modal" data-item-id={props.itemid}>
          <img src={props.image} alt={`${props.artist} - ${props.comment}`} />
        </RRLink>
      </Photo>
    </ItemPhoto>

    <ItemBottom>
      <Comment>{props.comment}</Comment>
      <DateTxt>{props.date}</DateTxt>
    </ItemBottom>
  </ItemArea>
);

Item.propTypes = {
  itemid: PropTypes.number,
  smallimage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  postedtime: PropTypes.number.isRequired,
  date: PropTypes.string,
  artistid: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  unitid: PropTypes.number,
  unit: PropTypes.string,
  cheers: PropTypes.number.isRequired,
  comment: PropTypes.string,
  issupporter: PropTypes.bool
}

export default Item;