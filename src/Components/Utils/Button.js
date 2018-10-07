// import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Master Button style
 */
export const Button = styled.a`
  text-decoration: none;

  display: block;
  text-align: center;
  color: #f38ec3;

  transition: all 0.3s ease;
  cursor: pointer;
  border: 3px solid #f38ec3;
  padding: 10px 36px;
  font-weight: 400;
  border-radius: 22px;

  :hover {
    opacity: .5;
  }
`;

export const SubmitBtn = styled(Button)`
  display: inline-block;
  min-width: 190px;
  border: none;
  border-radius: 35px;
  color: #fff;

  padding: 16px 25px;
  font-size: 15px;
  text-align: center;

  pointer-events: ${props => props.off ? 'none' : 'auto'};
  background: ${props => props.off ? '#cbd1d8' : 'linear-gradient(to right, #f38ec3, #f26687)'};
  opacity: ${props => props.off ? '.8' : '1'};
`;

// Button.propTypes = {
//   color: PropTypes.string
// }

/** @component */
export default Button;