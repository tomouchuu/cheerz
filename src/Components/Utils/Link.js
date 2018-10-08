import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Master link style to wrap a react router link
 */
const Link = styled.span`
  a {
    color: ${props => props.color || '#bcc6cf'};
  
    &.active {
      color: #f38ec3;
    }
  }
`;

Link.propTypes = {
  color: PropTypes.string,
  selected: PropTypes.bool
}

/** @component */
export default Link;