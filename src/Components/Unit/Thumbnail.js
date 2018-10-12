import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';

import styled from 'styled-components';

const ThumbnailArea = styled.dl`
    width: 50%;
    display: flex;
    margin: 20px 0 0;
    :nth-child(-n+2) {
        margin: 0;
    }
`;
const ThumbnailImage = styled.dt`
    width: 200px;
    height: 200px;
    background: #fdfdff;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
    }
`;
const UnitDetails = styled.dd`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;
const UnitName = styled.p`
    margin: 0;
    font-size: 18px;
    a {
        color: #f38ec3;
    }
`;
const UnitMembers = styled.ul`
    margin: 10px 0 0;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    li {
        list-style: none;
        
        a {
            color: #f38ec3;
        }

        :after {
            content: '／';
            margin: 0 13px;
            color: #f38ec3;
        }

        :last-child:after {
            display: none;
        }
    }
`;

const UnitThumbnail = (props) => (
    <ThumbnailArea>
        <ThumbnailImage>
            <RRLink to={`/unit/${props.unitid}`}>
                <img src={props.unitimage} alt={props.unitname} />
            </RRLink>
        </ThumbnailImage>
        <UnitDetails>
            <UnitName>
                <RRLink to={`/unit/${props.unitid}`}>{props.unitname}</RRLink>
            </UnitName>
            <UnitMembers>
                {
                    props.unitmembers.map((artist) => (
                        <li key={artist.poster_id}>
                            <RRLink to={`/artist/${artist.poster_id}`}>{artist.name}</RRLink>
                        </li>
                    ))
                }
            </UnitMembers>
        </UnitDetails>
    </ThumbnailArea>
);

UnitThumbnail.propTypes = {
    unitid: PropTypes.number.isRequired,
    unitname: PropTypes.string.isRequired,
    unitimage: PropTypes.string,
    unitmembers: PropTypes.arrayOf(PropTypes.shape({
        poster_id: PropTypes.number,
        name: PropTypes.string
    }))
}

export default UnitThumbnail;