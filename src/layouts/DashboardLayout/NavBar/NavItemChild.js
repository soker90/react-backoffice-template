import React, { memo } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
} from '@material-ui/core';
import { useStyles } from './NavItem.styles';


const NavItemChild = (
  {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    info: Info,
    paddingLeft,
    ...rest
  }) => {
  const classes = useStyles();


  const style = { paddingLeft };

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
        {Info && <Info className={classes.info}/>}
      </Button>
    </ListItem>
  );
};

NavItemChild.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItemChild.defaultProps = {
  open: false,
};

NavItemChild.displayName = 'NavItemChild';

export default memo(NavItemChild);
