import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  input: {
    width: 300,
    'border-radius': 4,
    border: `1px solid ${theme.palette.textPrimary.contrast}`,
    outline: 'none',
    height: 30,
    padding: theme.spacing.unit * 2,
  },
});


class Input extends React.PureComponent {
  render() {
    return (
      <input
        className={this.props.classes.input}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  classes: PropTypes.object,
  onChange: PropTypes.func,
};

export default withStyles(styles)(Input);
