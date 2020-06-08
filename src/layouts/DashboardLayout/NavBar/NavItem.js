/* eslint-disable react/destructuring-assignment */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import NavItemRoot from './NavItemRoot';
import NavItemChild from './NavItemChild';

const NavItem = props => {
  let paddingLeft = 8;

  if (props.depth > 0) paddingLeft = 32 + 8 * props.depth;


  return props.children
    ? <NavItemRoot {...props} paddingLeft={paddingLeft} />
    : <NavItemChild {...props} paddingLeft={paddingLeft} />;
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

NavItem.displayName = 'NavItem';

export default memo(NavItem);
