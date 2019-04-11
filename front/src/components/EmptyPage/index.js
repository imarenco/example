import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  icon: {
    'line-height': 'inherit',
    color: 'inherit',
  },
  container: {
    top: 'calc(50% - 90px)',
    position: 'relative',
  },
  text: {
    'text-align': 'center',
  },
});

class EmptyPageMessage extends React.PureComponent {
  render() {

    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <Typography
          classes={{ root: this.props.classes.icon }}
          variant="display4"
          className={classes.text}
        >
          {this.props.icon}
        </Typography>
        <Typography
          gutterBottom
          variant="headline"
          className={classes.text}
        >
          {this.props.title}
        </Typography>
        <Typography
          variant="subheading"
          gutterBottom
          className={classes.text}
        >
          {this.props.description}
        </Typography>
      </div>
    );
  }
}

EmptyPageMessage.propTypes = {
  description: PropTypes.string,
  classes: PropTypes.object,
};


export default withStyles(styles)(EmptyPageMessage);

