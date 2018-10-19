import React from 'react';
import styled from 'styled-components';

import MockSearchUnitData from './../MockData/SearchUnit.json';
import MockSearchArtistData from './../MockData/SearchArtist.json';

import Breadcrumb from './../Components/Utils/Breadcrumb';
import UnitThumbnail from './../Components/Unit/Thumbnail';
import IdolThumbnail from './../Components/Idol/Thumbnail';

const Container = styled.div`
  padding: 0 30px;
`;

const SearchResultsSection = styled.section`
    display: block;
`;
const SectionTitle = styled.h3`
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    color: #f38ec3;
    margin: 0;
`;
const UnitSearchResults = styled.div`
    margin: 40px 0 0;
    display: flex;
    flex-wrap: wrap;
`;
const IdolThumbnails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  padding-left: 0;
  width: 100%;

  li {
    list-style: none;
    flex: 1 1 auto;
    margin-left: 10px;
    :first-child {
      margin-left: 0;
    }
  }
`;

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            units: [],
            artists: []
        };
    }

    componentDidMount() {
        const units = MockSearchUnitData.Result.group.list;
        const artists = MockSearchArtistData.Result.artists.list;
        this.setState({
            units,
            artists
        });
    }

    render() {
        return (
            <div>
                <Breadcrumb />
                <Container>
                    <SearchResultsSection>
                        <SectionTitle>ユニット（10）</SectionTitle>
                        <UnitSearchResults>
                            {
                                this.state.units.map((unit) => (
                                    <UnitThumbnail
                                        key={unit.group_id}
                                        unitid={unit.group_id}
                                        unitname={unit.name}
                                        unitimage={unit.image_url}
                                        unitmembers={unit.artists}
                                    />
                                ))
                            }
                        </UnitSearchResults>
                    </SearchResultsSection>
                    <SearchResultsSection>
                        <SectionTitle>アーティスト（53）</SectionTitle>
                        <IdolThumbnails>
                            {
                                this.state.artists.map((artist) => (
                                    <li key={artist.poster_id}>
                                        <IdolThumbnail
                                            artistid={artist.poster_id}
                                            artist={artist.name}
                                            image={artist.image_url}
                                            size="lg"
                                            unitid={artist.group[0].group_id}
                                            unit={artist.group[0].group_name}
                                        />
                                    </li>
                                ))
                            }
                        </IdolThumbnails>
                    </SearchResultsSection>
                </Container>
            </div>
        )
    }
}

export default Search;