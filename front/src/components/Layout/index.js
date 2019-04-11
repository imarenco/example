import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Header from '../Header';

const styles = () => ({
  layout: {
    display: 'flex',
    'flex-grow': 1,
    'flex-direction': 'column',
    opacity: 1,
  },
  section: {
    display: 'flex',
    'flex-direction': 'row',
    'flex-grow': 1,
  },
});

const Layout = props => (
  <div className={props.classes.layout}>
    <Header />
    <section className={props.classes.section}>
      <Menu name={props.page} />
      { props.children }
    </section>
  </div>
);

Layout.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object,
};


export default withStyles(styles)(Layout);
