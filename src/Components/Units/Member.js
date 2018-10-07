import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MemberArea = styled.div`
  margin: 30px 0 0;
  display: flex;
  flex: 1;
  min-width: 470px;
`;

const MemberThumbnail = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;

  a {
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    :hover {
      opacity: .5;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const MemberProfile = styled.div`
  flex: 1;
  margin: 15px 0 0 25px;
`;
const MemberName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  a {
    color: #f38ec3;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    :hover {
      opacity: .5;
    }
  }
`;
const MemberRomanji = styled.p`
  font-size: 7px;
  color: #f38ec3;
  margin: 0;
`;

const MemberExtra = styled.p`
  margin: 5px 0 0;
  font-size: 11px;
`;

const FavouriteBtn = styled.a`
  margin: 5px 0 0;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  display: inline-block;
  font-size: 8px;
  padding: 6px 11px;
  border: none;
  background: linear-gradient(to right, #f38ec3, #f26687);
  color: #fff;
  text-decoration: none;

  :hover {
    opacity: .5;
  }
`;

const MemberStats = styled.ul`
  margin: 5px 0 0;
  padding: 0;
  display: flex;

  li {
    margin: 0 0 0 10px;
    font-size: 11px;
    color: #f38ec3;
    list-style: none;

    :first-child {
      margin: 0;
    }
  }
`;

const MemberTxt = styled.p`
  margin: 5px 0 0;
  color: #cbd1d8;
`;

const Member = props => (
  <MemberArea>
    <MemberThumbnail>
      <a href={`/artist/${props.artistid}`}>
        <img src={props.artistimage} alt={props.artist} />
      </a>
    </MemberThumbnail>
    <MemberProfile>
      <MemberName>
        <a href={`/artist/${props.artistid}`}>{props.artist}</a>
      </MemberName>
      <MemberRomanji>{props.artistromanji}</MemberRomanji>
      {
        props.extra ? <MemberExtra>{props.extra}</MemberExtra> : '' 
      }
      <FavouriteBtn href="#" id="favoriteBtn" data-poster-id={props.artistid} data-fav-action="add">お気に入りに登録</FavouriteBtn>
      <MemberStats>
        <li className="cheerNum">{props.totalcheers}</li>
        <li className="photo">{props.photos}</li>
        <li className="favorite">{props.favourites}</li>
      </MemberStats>
      <MemberTxt>{props.text}</MemberTxt>
    </MemberProfile>
  </MemberArea>
);

Member.propTypes = {
  artistid: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  artistromanji: PropTypes.string,
  artistimage: PropTypes.string.isRequired,
  totalcheers: PropTypes.number.isRequired,
  photos: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  text: PropTypes.string
}

export default Member;