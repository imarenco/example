import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Layout from '../../../components/Layout';
import ListLayout from '../../../components/ListLayout';
import Searchbox from '../../../components/Input';
import ButtonAction from '../../../components/ActionButton';
import BrandSelectors from '../../../domain/brand/selectors';
import * as collectionActions from '../../../domain/brand/actions';

const styles = theme => ({
  body: {
    padding: `0px ${theme.spacing.unit * 4}px`,
  },
  backIcon: {
    padding: theme.spacing.unit * 2,
  },
  row: {
    'margin-top': theme.spacing.unit * 5,
  }
});

class BrandCreate extends React.Component {
  saveCollection() {
    if (this.props.match.params.action === 'edit') {
      this.props.actions.editBrand(this.props.creation, this.props.history.push);
    } else {
      this.props.actions.createBrand(this.props.creation, this.props.history.push);
    }
  }

  renderRow(title, placeholder, key) {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <Typography gutterBottom>{title}</Typography>
        <Searchbox value={this.props.creation[key]} placeholder={placeholder} onChange={(e) => this.props.actions.modifyCreationBrand({ [key]: e.target.value })} />
      </div>
    );
  }

  render() {
    const classes = this.props.classes;
    return (
      <Layout page="brands">
        <ListLayout
          headerLeft={<IconButton classes={{ root: classes.backIcon }} onClick={() => this.props.history.push('/')}><BackIcon /></IconButton>}
          headerRight={<ButtonAction text="Save" onClick={() => this.saveCollection()} />}
        >
          <div className={classes.body}>
            { this.renderRow('Name', 'name', 'name') }
            { this.renderRow('Type', 'type', 'type') }
          </div>
        </ListLayout>
      </Layout>
    )
  }
}


const mapStateToProps = state => ({
  creation: BrandSelectors.getCreationBrand(state),
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Object.assign({}, collectionActions), dispatch) });

BrandCreate.propTypes = {
  actions: PropTypes.shape({
    editBrand: PropTypes.func,
    createBrand: PropTypes.func,
    modifyCreationBrand: PropTypes.modifyCreationBrand,
  }),
  creation: PropTypes.object,
  match: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BrandCreate));
