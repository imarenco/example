import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  header: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'stretch',
  },
  headerLeft: {
    width: '-webkit-fill-available',
    textAlign: 'left',
  },
  headerRight: {
    width: '-webkit-fill-available',
    textAlign: 'right',
    display: 'flex',
    'align-items': 'right',
    'justify-content': 'flex-end',
  },
  body: {
    height: '80%',
  },
  separator: {
    height: '2px',
    margin: `${theme.spacing.unit * 2}px 0 0`,
    backgroundColor: theme.palette.textPrimary.contrast,
  },
});

class ListLayout extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>{this.props.headerLeft}</div>
          <div className={classes.headerRight}>{this.props.headerRight}</div>
        </div>
        <div className={classes.body}>
          <div className={classes.separator}></div> 
          {this.props.children}
        </div>
      </div>
    );
  }
}

ListLayout.propTypes = {
  children: PropTypes.element.isRequired,
  headerLeft: PropTypes.node,
  headerRight: PropTypes.node,
  classes: PropTypes.object,
};

ListLayout.defaultProps = {
};

export default withStyles(styles)(ListLayout);
