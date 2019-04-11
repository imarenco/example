import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = theme => ({
  sidebarMenuContent: {
    display: 'flex',
    width: 210,
    background: theme.palette.common.main,
  },
  sidebarMenuSection: {
    display: 'flex',
    'flex-direction': 'column',
    width: '100%',
    'max-height': 900,
    '& div': {
      display: 'flex',
      padding: theme.spacing.unit * 3,
      transition: 'background-color .1s linear',
      '&:hover': {
        'background-color': theme.palette.common.hover,
      },
      '& a': {
        display: 'flex',
        'flex-grow': 1,
        'text-decoration': 'none',
        'font-size': 18,
        'align-items': 'center',
      },
    },
  },
  item: {
    '& a': {
      color: theme.palette.textPrimary.main,
    },
  },
  active: {
    'border-right': `5px solid ${theme.palette.secondary.main}`,
    'background-color': theme.palette.common.hover,
  },
  icon: {
    'margin-right': 10,
    'font-size': 14,
  },
});

const items = [
  {
    name: 'brands',
    label: 'Brands',
    url: '/',
  },
  {
    name: 'categories',
    label: 'Categories',
    url: '/category',
  },
];

class Menu extends  React.Component {
  constructor(props) {
    super(props);
    this.state = { items: items };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sidebarMenuContent}>
        <section className={classes.sidebarMenuSection}>
          {
            this.state.items.map((item, i) => {
              return (
                <div key={i} className={classnames({[classes.active]: this.props.name === item.name }, classes.item)}>
                  <Link to={item.url}>
                    <i className={item.icon}/>
                    { item.label }
                  </Link>
                </div>
              );
            })
          }
        </section>
      </div>
    );
  }
}


Menu.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.object,
};


export default withStyles(styles)(Menu);
