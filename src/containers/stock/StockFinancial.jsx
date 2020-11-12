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

function createData(name, five, six, seven, eight, nine, zero, one, two) {
  return { name, five, six, seven, eight, nine, zero, one, two };
}

const rows = [
  createData('매출액', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
  createData('영업이익', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
  createData('영업이익(발표기준)', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  createData('당기순이익', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('지배주주순이익', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('비지배주주순이익', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
  createData('자산총계', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
  createData('부채총계', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  createData('자본총계', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('지배주주지분', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('비지배주주지분', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
  createData('자본금', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  createData('부채비율', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('유보율', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('영업이익률', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('지배주주순이익률', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('ROA', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
  createData('ROE', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  createData('EPS(원)', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('BPS(원)', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('DPS(원)', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('PER', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
  createData('PBR', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
  createData('발행주식수', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
  createData('배당수익률', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  
  // <TableCell align="right">매출액</TableCell>
  //           <TableCell align="right">영업이익</TableCell>
  //           <TableCell align="right">영업이익(발표기준)</TableCell>
  //           <TableCell align="right">당기순이익</TableCell>
  //           <TableCell align="right">지배주주순이익</TableCell>
  //           <TableCell align="right">비지배주주순이익</TableCell>
  //           <TableCell align="right">자산총계</TableCell>
  //           <TableCell align="right">부채총계</TableCell>
  //           <TableCell align="right">자본총계</TableCell>
  //           <TableCell align="right">지배주주지분</TableCell>
  //           <TableCell align="right">비지배주주지분</TableCell>
  //           <TableCell align="right">자본금</TableCell>
  //           <TableCell align="right">부채비율</TableCell>
  //           <TableCell align="right">유보율</TableCell>
  //           <TableCell align="right">영업이익률</TableCell>
  //           <TableCell align="right">지배주주순이익률</TableCell>
  //           <TableCell align="right">ROA</TableCell>
  //           <TableCell align="right">ROE</TableCell>
  //           <TableCell align="right">EPS(원)</TableCell>
  //           <TableCell align="right">BPS(원)</TableCell>
  //           <TableCell align="right">DPS(원)</TableCell>
  //           <TableCell align="right">PER</TableCell>
  //           <TableCell align="right">PBR</TableCell>
  //           <TableCell align="right">발행주식수</TableCell>
  //           <TableCell align="right">배당수익률</TableCell>
];

export default function StockFinancial() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const finance = useSelector(state => (state.stockReducer.finance))

  useEffect(() => {
    dispatch(stockActions.getFinance())
  })

  return (
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
              <TableCell align="right">{row.five}</TableCell>
              <TableCell align="right">{row.six}</TableCell>
              <TableCell align="right">{row.seven}</TableCell>
              <TableCell align="right">{row.eight}</TableCell>
              <TableCell align="right">{row.nine}</TableCell>
              <TableCell align="right">{row.zero}</TableCell>
              <TableCell align="right">{row.one}</TableCell>
              <TableCell align="right">{row.two}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}