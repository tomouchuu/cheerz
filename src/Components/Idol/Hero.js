import React from 'react';
import styled from 'styled-components';

const HeroArea = styled.section`
  width: 100%;
  background: #e8e9ea;
`;

const CoverArea = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  background-size: cover !important;
  background: ${props => props.coverimage ? `url(${props.coverimage}) top center no-repeat` : ""}
`;
const CoverContainer = styled.div`
  padding: 20px 0;
  position: relative;
  height: 100%;

  display: none;
`;

const HeroContainer = styled.div`
  margin: 0 30px;

  display: flex;
  align-items: flex-start;
`;

const IdolDetails = styled.div`
  z-index: 9;
`;
const IdolThumb = styled.div`
  margin: -150px 0 0;
  width: 170px;
  height: 170px;

  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const IdolProfile = styled.div`
  margin: 20px 0 0;
`;
const UnitName = styled.p`
  margin: 0;
  text-align: center;
  a {
    font-size: 11px;
    color: #cbd1d8;
    text-decoration: underline;
  }
`;
const IdolName = styled.p`
  margin: 5px 0 0;
  text-align: center;
  font-size: 24px;
  color: #f38ec3;

  a {
    color: #f38ec3;
    text-decoration: underline;
  }
`;
const IdolRomanji = styled.p`
  margin: 0;
  text-align: center;
  font-size: 7px;
  color: #f38ec3;
`;

const Profile = styled.div`
  flex: 1;
  margin: 0 0 0 50px;
`;
const ProfileText = styled.p`
  margin: 20px 0 0;
`;

const FavouriteArea = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-left: 0;
`;
const FavouriteItem = styled.li`
  margin: 0 0 0 10px;
  list-style: none;
`;
const FavouriteCount = styled(FavouriteItem)`
  color: #f38ec3;
  font-size: 11px;

  span {
    margin: 0 0 0 5px;
    font-size: 25px;
  }
`;
const FavouriteBtn = styled.a`
  text-align: center;
  border-radius: 30px;
  padding: 7px 20px;
  display: inline-block;
  border: none;
  background: linear-gradient(to right, #f38ec3, #f26687);
  color: #fff;
`;

const IdolHero = () => (
  <HeroArea>
    <CoverArea coverimage="https://d1jo5b1m9v3ic.cloudfront.net/image_manager/poster_cover/26167_8d879d90b07cad416181c85d53a49020.png">
      <CoverContainer>
        <div className="headerIcon">
          <div className="headerToggleBtn" id="toggleBtn"></div>
        </div>
      </CoverContainer>
    </CoverArea>

    <HeroContainer>
      <IdolDetails>
        <IdolThumb>
          <a href="/artist/4940">
            <img src="https://d1jo5b1m9v3ic.cloudfront.net/poster/profile/p4940/db7db9f905bfa9d8b69c454d81b922e4-large.jpg" />
          </a>
        </IdolThumb>
        <IdolProfile>
          <UnitName>
            <a href="/unit/728">Niji no Conquistador</a>
          </UnitName>
          <IdolName><a href="/artist/4940">ao yamato</a></IdolName>
          <IdolRomanji>ao yamato</IdolRomanji>
          <p className="profileInfo"></p>
        </IdolProfile>
      </IdolDetails>

      <Profile>
        <FavouriteArea>
          <FavouriteCount>お気に入り登録<span>913</span>人</FavouriteCount>
          <FavouriteItem>
            <FavouriteBtn href="/login" data-fav-action="add">お気に入りに登録</FavouriteBtn>
          </FavouriteItem>
        </FavouriteArea>

        <ProfileText>
          虹のコンキスタドール大和明桜だわアーオ♪
          女子高生1年目 身長162 握力 右29 左28
          4946レボリューション💫
        </ProfileText>
      </Profile>
    </HeroContainer>
  </HeroArea>
);

export default IdolHero;