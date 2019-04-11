import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Layout from '../../../components/Layout';
import ListLayout from '../../../components/ListLayout';
import EmptyPage from '../../../components/EmptyPage';
import CategoriesTable from '../../../components/CategoriesTable';
import CategorySelectors from '../../../domain/category/selectors';
import ActionButton from '../../../components/ActionButton';
import * as CategoryActions from '../../../domain/category/actions';
import Searchbox from '../../../components/Input';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    const { history, list, classes } = this.props;
    const items = list.payload || [];
    return (
      <Layout page="categories">
        <ListLayout
          headerRight={<ActionButton text="create" onClick={() => history.push('/category/create')} />}
        >
          <div className={classes.body}>
            <Searchbox
              placeholder="Search Categories"
              onChange={(e) => {
                this.setState({ search: e.target.value });
                this.props.actions.getCategories(e.target.value);
              }}
            />
            {
              items.length > 0 && <CategoriesTable
                edit={(payload) => {
                  this.props.actions.setEditCategory(payload);
                  this.props.history.push('/category/edit');

              }} delete={(id) => this.props.actions.deleteCategory(id)} rows={items} />
            }
            {
              items.length === 0 && !list.isLoading && list.isReady && this.state.search === '' && <EmptyPage
                icon={'😊'}
                title={'No categories yet.'}
                description={'Create an category to get started.'}
              />
            }

            {
              items.length === 0 && !list.isLoading && list.isReady && this.state.search !== '' && <EmptyPage
                icon={'😊'}
                title={'We couldn’t find anything.'}
                description={'Adjust search for more results.'}
              />
            }


          </div>
        </ListLayout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  list: CategorySelectors.getCategories(state),
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(CategoryActions, dispatch) });

const styles = theme => ({
  body: {
    padding: theme.spacing.unit * 4,
    height: '100%',
  },
});

CategoryList.propTypes = {
  actions: PropTypes.shape({
    setEditCategory: PropTypes.func,
    deleteCategory: PropTypes.func,
  }),
  classes: PropTypes.object,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoryList));
