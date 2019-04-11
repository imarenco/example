import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  header: {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    background: theme.palette.primary.main,
    height: 80,
    padding: 16,
    'align-items': 'center',
  },
  headerSection: {
    display: 'flex',
    'flex-direction': 'row',
  },
  name: {
    height: 50,
  },
});

const Header = (props) => {
  return (
    <header className={props.classes.header}>
      <div>
        <img className={props.classes.name} src={'/static/icons/logo.png'} />
      </div>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);
