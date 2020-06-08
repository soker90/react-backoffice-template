import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { USER_PERMISSION_LIST } from 'constants/permissions';
import {
  Card,
  CardHeader,
  Divider,
  Switch,
  Typography,
  List,
  ListItemText,
  ListItemSecondaryAction,
  ListItem, Container, Box,
} from '@material-ui/core';
import { Header, Page } from 'components';
import { useStyles } from './PermissionsView.styles';

const PermissionsView = ({ permissions, userRole }) => {
  const classes = useStyles();
  /**
   * Render permission item
   * @param {string} permission
   * @param {number} index
   * @return {ListItem}
   * @private
   */
  const _renderPermission = (permission, index) => (
    <ListItem
      divider={index < USER_PERMISSION_LIST.length - 1}
      key={index}
    >
      <ListItemText>
        <Typography variant="body1">
          {permission}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Switch
          checked={permissions.includes(permission)}
          color="primary"
          edge="end"
        />
      </ListItemSecondaryAction>
    </ListItem>
  );

  return (
    <Page
      className={classes.root}
      title="Permisos"
    >
      <Container maxWidth={false} className={classes.container}>
        <Header
          routes={[{ link: '/app/settings', title: 'Configuración' }]}
          title="Permisos"
        />
        <Box mt={3}>
          <Card>
            <CardHeader title={`Listado de permisos (${userRole})`} />
            <Divider />
            <List>
              {USER_PERMISSION_LIST.map(_renderPermission)}
            </List>
          </Card>
        </Box>
      </Container>
    </Page>
  );
};

PermissionsView.propTypes = {
  /**
   * Permisos del usuario
   */
  permissions: PropTypes.array.isRequired,
  /**
   * Rol del usuario
   */
  userRole: PropTypes.string.isRequired,
};

PermissionsView.displayName = 'PermissionsView';

export const story = PermissionsView;
export default memo(PermissionsView);
