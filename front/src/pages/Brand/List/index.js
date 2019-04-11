import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../../../components/Layout';
import ListLayout from '../../../components/ListLayout';
import EmptyPage from '../../../components/EmptyPage';
import CollectionTable from '../../../components/BrandsTable';
import BrandSelectors from '../../../domain/brand/selectors';
import ActionButton from '../../../components/ActionButton';
import * as brandActions from '../../../domain/brand/actions';
import Searchbox from '../../../components/Input';



class BrandList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentDidMount() {
    this.props.actions.getBrands();
  }

  render() {
    const { history, list, classes } = this.props;
    const items = list.payload || [];
    return (
      <Layout page="brands">
        <ListLayout
          headerRight={<ActionButton text="create" onClick={() => history.push('/brand/create')} />}
        >
          <div className={classes.body}>
            <Searchbox
              placeholder="Search Brands"
              onChange={(e) => {
                this.setState({ search: e.target.value });
                this.props.actions.getBrands(e.target.value);
              }}
            />
            {
              items.length > 0 && <CollectionTable
                edit={(payload) => {
                  this.props.actions.setEditBrand(payload);
                  this.props.history.push('/brand/edit');
                }} delete={(id) => this.props.actions.deleteBrand(id)} rows={items} />
            }

            {
              items.length === 0 && !list.isLoading && list.isReady && this.state.search === '' && <EmptyPage
                icon={'😊'}
                title={'No brands yet.'}
                description={'Create an brand to get started.'}
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
  list: BrandSelectors.getBrands(state),
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(brandActions, dispatch) });

const styles = theme => ({
  body: {
    padding: theme.spacing.unit * 4,
    height: '100%',
  },
});

BrandList.propTypes = {
  actions: PropTypes.shape({
    setEditBrand: PropTypes.func,
    deleteBrand: PropTypes.func,

  }),
  history: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BrandList));
