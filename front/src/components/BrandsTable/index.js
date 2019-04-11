import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Clear from '@material-ui/icons/Clear';
import Edit from '@material-ui/icons/Edit';
import moment from 'moment';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  nameRow: {
    width: 100,
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class MaterialTable extends React.Component {
  render() {
    const rows = (this.props.rows || []);
    const classes = this.props.classes;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell classes={{ root: classes.nameRow }}>Name</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Created</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell component="th" scope="row">
                  {moment(row.createdAt).fromNow()}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => this.props.edit(row)} ><Edit fontSize="small" color="primary" /></IconButton>
                  <IconButton onClick={() => this.props.delete(row._id)} ><Clear fontSize="small"  color="primary" /> </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(MaterialTable);

