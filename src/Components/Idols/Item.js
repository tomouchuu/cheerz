import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ItemArea = styled.div`
  margin: 30px 0 0 0;
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
        <a href={`/artist/${props.artistid}`}><img src="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p271/da0132e2a7174c4cde8616e17a71b1ec-small.jpg" alt={props.artist} /></a>
      </IdolThumb>
      <IdolDetailArea>
        <IdolUnit>
          <a href={`/unit/${props.unitid}`}>{props.unit}</a>
        </IdolUnit>
        <IdolName><a href={`/artist/${props.artistid}`}>{props.artist}</a></IdolName>
      </IdolDetailArea>
      <CheersCount id={`feedCheerCount${props.itemid}`}>{props.cheers}</CheersCount>
    </ItemHead>

    <ItemPhoto>
      <div class="voiceIcon"></div>
      <div class="itemInfo"></div>
      <Photo>
        <a href={`#item-${props.itemid}`} class="modal" data-item-id={props.itemid}>
          <img src="https://d1jo5b1m9v3ic.cloudfront.net/item/i583119/s656352fbb51e24b9ac71f5b5db5485dffe15945-large.jpg" alt={`${props.artist} - ${props.comment}`} />
        </a>
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
  postedtime: PropTypes.number,
  date: PropTypes.string,
  artistid: PropTypes.number,
  artist: PropTypes.string,
  unitid: PropTypes.number,
  unit: PropTypes.string,
  cheers: PropTypes.number,
  comment: PropTypes.string
}

export default Item;