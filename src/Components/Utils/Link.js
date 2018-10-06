import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Master link style
 */
const Link = styled.a`
  cursor: pointer;
  color: ${props => props.color || "#bcc6cf"};
  text-decoration: none;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.5;
  }
`;

Link.propTypes = {
  color: PropTypes.string
}

/** @component */
export default Link;