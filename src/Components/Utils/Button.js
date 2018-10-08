// import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Master Button style
 */
export const Button = styled.a`
  display: block;
  text-align: center;
  color: #f38ec3;

  border: 3px solid #f38ec3;
  padding: 10px 36px;
  font-weight: 400;
  border-radius: 22px;
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

export const MoreBtn = styled.div`
  margin: 10px 0 0;
  text-align: right;
  
  a {
    text-align: center;
    border-radius: 20px;
    color: #8995a3;
    border: 2px solid #cbd1d8;
    display: inline-block;
    padding: 1px 10px;
    font-size: 10px;
  }
`;

// Button.propTypes = {
//   color: PropTypes.string
// }

/** @component */
export default Button;