import styled from 'styled-components';

export const FeedSelect = styled.section`
  background: #e8e9ea;
  padding: 3px 30px 13px;

  display: flex;
  flex-wrap: wrap;
`;

export const FeedBtn = styled.a`
  text-decoration: none;

  display: block;
  height: 22px;
  margin: 10px 0 0 10px;
  padding: 5px 14px;
  border-radius: 11px;
  font-size: 10px;
  text-align: center;
  cursor: pointer;

  background: ${props => props.selected ? '#f38ec3' : '#f1f4f6'};
  color: ${props => props.selected ? '#fff' : '#8995a3'};

  :hover {
    opacity: .5;
  }

  :first-child {
    margin-left: 0;
  }
`;