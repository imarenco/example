
    
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EmptyPageMessage from '../../components/EmptyPage';
import Layout from '../../components/Layout';
import errorMessages from '../../utils/errors/errors.json';

const styles = () => ({
  description: {
    'max-width': '350px',
    margin: '0 auto',
  },
  root: {
    width: '100%',
  },
});

class ErrorPage extends React.Component {
  renderMessageError() {
    const code = this.props.match.params.code;
    const errorObj = errorMessages[code] ? errorMessages[code] : errorMessages['unexpected-error'];
    return (
      <EmptyPageMessage
        icon={errorObj.icon}
        title={errorObj.title}
        description={errorObj.description}
      />
    );
  }

  render() {
    const classes = this.props.classes;
    return (<Layout page="collections">
      <div className={classes.root}>
        { this.renderMessageError() }
      </div>
    </Layout>);
  }
}


export default withStyles(styles)(ErrorPage);