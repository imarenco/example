import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Layout from '../../../components/Layout';
import ListLayout from '../../../components/ListLayout';
import Searchbox from '../../../components/Input';
import ButtonAction from '../../../components/ActionButton';
import CategorySelectors from '../../../domain/category/selectors';
import * as categoryActions from '../../../domain/category/actions';

const styles = theme => ({
  body: {
    padding: `0px ${theme.spacing.unit * 4}px`,
  },
  backIcon: {
    padding: theme.spacing.unit * 2,
  },
  row: {
    'margin-top': theme.spacing.unit * 5,
  },
});

class CategoryCreate extends React.Component {
  saveCollection() {
    if (this.props.match.params.action === 'edit') {
      this.props.actions.editCategory(this.props.creation, this.props.history.push);
    } else {
      this.props.actions.createCategory(this.props.creation, this.props.history.push);
    }
  }

  renderRow(title, placeholder, key) {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <Typography gutterBottom>{title}</Typography>
        <Searchbox value={this.props.creation[key]} placeholder={placeholder} onChange={(e) => this.props.actions.modifyCreationCategory({ [key]: e.target.value })} />
      </div>
    );
  }

  render() {
    const classes = this.props.classes;

    return (
      <Layout page="categories">
        <ListLayout
          headerLeft={<IconButton classes={{ root: classes.backIcon }} onClick={() => this.props.history.push('/category')}><BackIcon /></IconButton>}
          headerRight={<ButtonAction text="Save" onClick={() => this.saveCollection()} />}
        >
          <div className={classes.body}>
            { this.renderRow('Label', 'label', 'label') }
            { this.renderRow('Value', 'value', 'value') }
          </div>
        </ListLayout>
      </Layout>
    );
  }
}


const mapStateToProps = state => ({
  creation: CategorySelectors.getCreationCategory(state),
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Object.assign({}, categoryActions), dispatch) });

CategoryCreate.propTypes = {
  actions: PropTypes.shape({
    modifyCreationCategory: PropTypes.func,
    createCategory: PropTypes.func,
    editCategory: PropTypes.func,
  }),
  classes: PropTypes.object,
  match: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoryCreate));
