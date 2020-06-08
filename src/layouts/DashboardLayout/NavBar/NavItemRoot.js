import React, { useState, memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  ListItem,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useStyles } from './NavItem.styles';


const NavItemRoot = (
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
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const style = { paddingLeft };


  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      key={title}
      {...rest}
    >
      <Button
        className={classes.button}
        onClick={handleToggle}
        style={style}
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
        {open ? (
          <ExpandLessIcon
            size="small"
            color="inherit"
          />
        ) : (
          <ExpandMoreIcon
            size="small"
            color="inherit"
          />
        )}
      </Button>
      <Collapse in={open}>
        {children}
      </Collapse>
    </ListItem>
  );
};


NavItemRoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  info: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItemRoot.defaultProps = {
  open: false,
};

NavItemRoot.displayName = 'NavItemRoot';

export default memo(NavItemRoot);
