import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CrumbArea = styled.div`
    background: #ebedee;
`;
const CrumbContainer = styled.div`
    padding: 8px 30px;
`;
const Crumbs = styled.ol`
    padding: 0;
    margin: 0;
    display: flex;
`;
const Crumb = styled.li`
    font-size: 9px;
    color: #cbd1d8;
    list-style: none;

    a {
        color: #a7b4c3;
    }

    :after {
        content: '>';
        color: #a7b4c3;
        margin: 0 13px;
    }

    :last-child:after {
        content: none;
    }
`;

const Breadcrumb = () => (
    <CrumbArea>
        <CrumbContainer>
            <Crumbs>
                <Crumb><Link to="/">CHEERZ</Link></Crumb>
                <Crumb>検索結果</Crumb>
            </Crumbs>
        </CrumbContainer>
    </CrumbArea>
);

export default Breadcrumb;