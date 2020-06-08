import React, { useReducer, useState, memo } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { initialState } from 'routes/Search/constants/formConstants';
import { useDispatch } from 'react-redux';
import { searchClients } from 'routes/Search/modules/actions';

const useStyles = makeStyles(() => ({
  drawer: {
    width: 500,
    maxWidth: '100%',
  },
}));

const Search = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialState
  );
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Handle function of the event onChange of the inputs
   * @param name
   * @param value
   * @private
   */
  const _handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  /**
   * Reset all inputs
   * @private
   */
  const _resetState = () => {
    setState(initialState);
  };

  /**
   * Handle function submit form
   * @private
   */
  const _handleSubmit = () => {
    dispatch(searchClients(state));
    _resetState();
  };

  /**
   * Press enter action
   * @param {Object} event
   * @private
   */
  const _handleKeyPress = event => {
    if (event.key === 'Enter') _handleSubmit();
  };

  /**
   * Render input
   * @param {string} name
   * @param {string} label
   * @param {boolean} disabled
   * @returns {Box}
   * @private
   */
  const _renderFormInput = (name, label, disabled = false) => (
    <Box mt={2}>
      <TextField
        className={classes.queryField}
        fullWidth
        placeholder={label}
        value={state[name]}
        variant="outlined"
        name={name}
        onChange={_handleChange}
        onKeyPress={_handleKeyPress}
        disabled={disabled}
        data-cy={name}
      />
    </Box>
  );

  return (
    <>
      <Tooltip title="Buscar">
        <IconButton color="inherit" onClick={handleOpen} data-cy="search-button">
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawer }}
        ModalProps={{ BackdropProps: { invisible: true } }}
        onClose={handleClose}
        open={isOpen}
        variant="temporary"
        data-cy="search-drawer"
      >
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <Box p={3}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4" color="textPrimary">
                Buscar
              </Typography>
              <IconButton onClick={handleClose} data-cy="search-close">
                <HighlightOffIcon />
              </IconButton>
            </Box>
            {_renderFormInput('email', 'Correo electrónico')}
            {_renderFormInput('userId', 'UserID')}
            {_renderFormInput('phone', 'Teléfono', true)}
            {_renderFormInput('dni', 'DNI', true)}
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button
                color="secondary"
                variant="contained"
                onClick={_handleSubmit}
              >
                Buscar
              </Button>
            </Box>
          </Box>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

Search.displayName = 'Search-TopBar-DashBoard';

export default memo(Search);
