import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import isClient from '../utils/isClient';
import media from '../Media/Media';
import styled from 'styled-components';

const Container = styled.li` 
  display: block;
  ${media.desktop``}
  ${media.tablet`display: none;`}
  ${media.phone`display: none;`}
  `;

const NavRouterLink = ({ path, customStyles, name }) => {
  if (isClient) require('./NavRouterLink.css');
  const boxStyle = customStyles ? customStyles.box : null;
  const linkStyle = customStyles ? customStyles.link : null;
  const pathTo = path || `/${name.toLowerCase()}`;
  return (
    <li className={'NavRouterLink'} style={{ display: 'block', ...boxStyle }} >
      <Link to={pathTo} >
        <span style={{ ...linkStyle }}>{name}</span>
      </Link>
    </li>
  );
};

NavRouterLink.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  customStyles: PropTypes.object,
};

export default NavRouterLink;
