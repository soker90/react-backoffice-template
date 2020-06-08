import React, { useReducer, memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
  TextField, Box,
} from '@material-ui/core';
import { initialState } from '../../constants/formConstants';
import { useStyles } from './SearchForm.styles';

const SearchForm = ({ searchClients, className, ...rest }) => {
  const classes = useStyles();
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialState
  );

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
    searchClients(state);
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
   * @returns {Grid}
   * @private
   */
  const _renderFormInput = (name, label, disabled = false) => (
    <Grid
      item
      md={3}
      xs={6}
    >
      <TextField
        fullWidth
        label={label}
        name={name}
        onChange={_handleChange}
        value={state[name]}
        variant="outlined"
        onKeyPress={_handleKeyPress}
        disabled={disabled}
        data-cy={name}
      />
    </Grid>
  );

  /**
   * Render all buttons
   * @returns {Box}
   * @private
   */
  const _renderButtons = () => (
    <Box
      p={2}
    >
      <Button
        className={classes.searchButton}
        color="primary"
        variant="contained"
        onClick={_handleSubmit}
      >
        Buscar
      </Button>
      <Button
        type="submit"
        onClick={_resetState}
        data-cy="btn-clean"
      >
        Limpiar
      </Button>
    </Box>
  );


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          spacing={4}
        >
          {_renderFormInput('email', 'Correo electrónico')}
          {_renderFormInput('userId', 'UserID')}
          {_renderFormInput('phone', 'Teléfono', true)}
          {_renderFormInput('dni', 'DNI', true)}
        </Grid>
      </CardContent>
      <Divider />
      {_renderButtons()}
    </Card>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string,
  searchClients: PropTypes.func.isRequired,
};

SearchForm.displayName = 'SearchForm';

export const story = SearchForm;
export default memo(SearchForm);
