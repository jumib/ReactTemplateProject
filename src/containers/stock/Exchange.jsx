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
});


export default function Exchange() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const recentNews = useSelector(state => (state.stockReducer.recentNews))
  const rows = [recentNews]
  useEffect(() => {
    // dispatch(stockActions.getExchangeRate())
  })

  return (
    <div>
        <h2>환율정보</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>IFRS(연결)</TableCell>
            <TableCell align="right">2015/12</TableCell>
            <TableCell align="right">2016/12</TableCell>
            <TableCell align="right">2017/12</TableCell>
            <TableCell align="right">2018/12</TableCell>
            <TableCell align="right">2019/12</TableCell>
            <TableCell align="right">2020/12(E)</TableCell>
            <TableCell align="right">2021/12(E)</TableCell>
            <TableCell align="right">2022/12(E)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.f_2015_12}</TableCell>
              <TableCell align="right">{row.f_2016_12}</TableCell>
              <TableCell align="right">{row.f_2017_12}</TableCell>
              <TableCell align="right">{row.f_2018_12}</TableCell>
              <TableCell align="right">{row.f_2019_12}</TableCell>
              <TableCell align="right">{row.f_2020_12}</TableCell>
              <TableCell align="right">{row.f_2021_12}</TableCell>
              <TableCell align="right">{row.f_2022_12}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}