import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    background: theme.palette.secondary.main,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
    color: theme.palette.textPrimary.main,
  },
});


const ActionButton = ({text, onClick, classes}) => (
  <MaterialButton
    classes={{ root: classes.root }}
    onClick={()=> onClick()}
  >
    { text }
  </MaterialButton>
);

ActionButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(ActionButton);
