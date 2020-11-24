import React from 'react'
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

const ExchangeInfo = () => {

    const exchangeRate = useSelector(state => (state.stockReducer.exchangeRate))
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(stockActions.getExchangeRate())
    })


    return (
        <div className={classes.location}>
      <h4>최근 5개년 환율 정보</h4>
      <br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">NO.</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">USD</TableCell>
            <TableCell align="right">JPY</TableCell>
            <TableCell align="right">EUR</TableCell>
            <TableCell align="right">CNY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exchangeRate.map((row) => (
            <TableRow key={row.no}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.usd}</TableCell>
              <TableCell align="right">{row.jpy}</TableCell>
              <TableCell align="right">{row.eur}</TableCell>
              <TableCell align="right">{row.cny}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}
export default ExchangeInfo