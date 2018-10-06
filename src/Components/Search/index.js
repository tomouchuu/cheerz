import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBox = styled.div`
  position: relative;
`;
const SearchInput = styled.input`
  -webkit-appearance: none;
  outline: none;

  display: block;
  width: 230px;
  border: none;
  background: ${props => props.color || "#fff"};
  border-radius: 20px;
  box-shadow: none;
  padding: 7px 30px;
  font-size: 11px;
`;

/**
 * Search Form
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <SearchBox>
        <form method="GET" action="/search">
          <SearchInput type="text" name="keyword" color={this.props.color} placeholder={this.props.placeholder} value={this.state.keyword}
          onChange={this.handleInputChange} />
        </form>
      </SearchBox>
    )
  }
};

Search.propTypes = {
  color: PropTypes.string,
  placeholder: PropTypes.string
}

export default Search;