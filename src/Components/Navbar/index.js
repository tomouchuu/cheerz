import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LogoImg from './../../Images/logo_CHEERZ.png';
import Search from './../Search';
import Link from './../Utils/Link';
import AccountNavbar from './Account';

const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  flex-grow: 1;

  ul {
    display: flex;
    align-items: center;
    padding-left: 0;
  }
  li {
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.h1`
  width: 91px;
  height: 17px;

  a {
    display: block;
    background-image: url(${LogoImg});
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
    width: 91px;
    height: 17px;
    text-indent: -9999px;
  }
`;

const LoginLink = styled(Link)`
  font-size: 12px;
  font-weight: bold;

  margin-left: 30px;
`;

/**
 * Navbar
 */
const Navbar = props => (
  <NavContainer>
    <Logo><a href="/">CHEERZ</a></Logo>
    <Nav>
      <ul>
        <li><Link color="#f38ec3" href="/">HOME</Link></li>
        <li><Link href="/timeline">タイムライン</Link></li>
        <li><Link href="/ranking">ランキング</Link></li>
        <li><Link href="/article">記事・コラム</Link></li>
      </ul>
    </Nav>
    <Search placeholder="アーティスト・ユニット検索" color="#f4f6f8" />
    {
      props.account ? <AccountNavbar account={props.account} /> : <LoginLink color="#f38ec3" href="/login">LOGIN</LoginLink>
    }
  </NavContainer>
);

Navbar.propTypes = {
  account: PropTypes.object
}

export default Navbar;