import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockActions } from 'modules/stock.action';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  location: {
      padding: '80px'
  }
});


export default function News() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const recentNews = useSelector(state => (state.stockReducer.recentNews))
  const rows = recentNews
  useEffect(() => {

     // let stockName = localStorage.getItem('stockName')
     // dispatch(stockActions.getRecentNews(stockName))
     const stockName = '삼성전자'
     // dispatch(stockActions.getRecentNews(stockName))
  })

  return (
    <div className={classes.location}>
    <TableContainer component={Paper}>
        <h2>NEWS</h2>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {/* <TableCell>NO.</TableCell> */}
            <TableCell>TITLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              {/* <TableCell>{row.no}</TableCell> */}
              <TableCell>{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}