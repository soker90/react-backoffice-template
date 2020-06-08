import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Paper, IconButton, Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningOutlined';
import { useStyles } from './Alert.styles';

const icons = {
  default: <InfoIcon />,
  success: <CheckCircleIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};
/**
 * La finalidad de este componente mostrar mensajes, principalemente informativos, al usuario.
 * Son notificaciones fijas, en las que se puede activar la posibilidad de descartarlas.
 */
const Alert = forwardRef((props, ref) => {
  const {
    className, icon, variant, message, onClose, ...rest
  } = props;
  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, classes[variant], className)}
      component={Typography}
      elevation={1}
      ref={ref}
      variant="elevation"
    >
      <span className={classes.icon}>{icon || icons[variant]}</span>
      <span className={classes.message}>{message}</span>
      {onClose && (
        <IconButton
          className={classes.action}
          color="inherit"
          key="close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
});

Alert.displayName = 'Alert';

Alert.propTypes = {
  /**
   * Nombe de la clase de estilos
   */
  className: PropTypes.string,
  /**
   * Icono de la notificación - ( Si no existe se establece uno en función de variant )
   */
  icon: PropTypes.node,
  /**
   * Mensaje de la alerta que se mostrará
   */
  message: PropTypes.string.isRequired,
  /**
   * Función para cerrar el modal, si no existe no aparece el botón de cerrar
   */
  onClose: PropTypes.func,
  /**
   * Tipos de notificaciones, según este se mostrará el color y el icono
   */
  variant: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error']),
};

Alert.defaultProps = {
  variant: 'default',
};

export const story = Alert;

export default memo(Alert);
