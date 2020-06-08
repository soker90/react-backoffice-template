import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useStyles } from './Header.styles';

/**
 * Cabecera con navegación que indica la posición dentro la webapp
 */
const Header = ({
  className, routes, title, description, ...rest
}) => {
  const classes = useStyles();

  const _itemNav = (link, titleNav, idx) => (
    <Link
      key={idx || 'none'}
      variant="body1"
      color="inherit"
      to={link}
      component={RouterLink}
    >
      {titleNav}
    </Link>
  );

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {_itemNav('/app', 'Inicio')}
          {
            routes.map(({ link, title: titleRoute }, idx) => _itemNav(link, titleRoute, idx))
          }
          <Typography
            variant="body1"
            color="textPrimary"
          >
            {title}
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          {description || title}
        </Typography>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  routes: [],
};

export const story = Header;
export default memo(Header);
