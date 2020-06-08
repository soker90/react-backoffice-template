import React, { useState, useRef, memo } from 'react';
import {
  Badge,
  Box,
  Button,
  IconButton,
  Popover,
  TextField,
  Tooltip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import useSettings from 'hooks/useSettings';

import { THEMES, THEMES_NAME } from 'constants/common';

const useStyles = makeStyles(theme => ({
  badge: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
  },
  popover: {
    width: 320,
    padding: theme.spacing(2),
  },
}));

const Settings = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const { settings, saveSettings } = useSettings();
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = () => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Configuración">
        <Badge
          color="secondary"
          variant="dot"
          classes={{ badge: classes.badge }}
        >
          <IconButton color="inherit" onClick={handleOpen} ref={ref} data-cy="settings-button">
            <SettingsOutlinedIcon />
          </IconButton>
        </Badge>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        classes={{ paper: classes.popover }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Typography variant="h4" color="textPrimary">
          Configuración
        </Typography>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Tema"
            name="theme"
            onChange={event => handleChange('theme', event.target.value)}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant="outlined"
            inputProps={{
              'data-cy': 'select-theme',
            }}
          >
            {Object.keys(THEMES).map(theme => (
              <option key={theme} value={theme}>
                {THEMES_NAME[theme]}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSave}
            data-cy="button-theme"
          >
            Guardar
          </Button>
        </Box>
      </Popover>
    </>
  );
};

Settings.displayName = 'Settings';

export default memo(Settings);
