// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { stockActions } from 'modules/stock.action';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });


// function createData(name, five, six, seven, eight, nine, zero, one, two) {
//   return { name, five, six, seven, eight, nine, zero, one, two };
// }

// const rows = [
//   createData('매출액', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
//   createData('영업이익', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
//   createData('영업이익(발표기준)', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
//   createData('당기순이익', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
//   createData('지배주주순이익', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('비지배주주순이익', 159, 6.0, 24, 4.0, 159, 6.0, 24, 4.0),
//   createData('자산총계', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
//   createData('부채총계', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
//   createData('자본총계', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
//   createData('지배주주지분', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('비지배주주지분', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
//   createData('자본금', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
//   createData('부채비율', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
//   createData('유보율', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('영업이익률', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
//   createData('지배주주순이익률', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('ROA', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
//   createData('ROE', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
//   createData('EPS(원)', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
//   createData('BPS(원)', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('DPS(원)', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('PER', 305, 3.7, 67, 4.3, 159, 6.0, 24, 4.0),
//   createData('PBR', 356, 16.0, 49, 3.9, 159, 6.0, 24, 4.0),
//   createData('발행주식수', 237, 9.0, 37, 4.3, 159, 6.0, 24, 4.0),
//   createData('배당수익률', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),

// ];

// export default function StockFinancial() {
//   const classes = useStyles();
//   const dispatch = useDispatch()
//   const finance = useSelector(state => (state.stockReducer.finance))

//   useEffect(() => {
//     dispatch(stockActions.getFinance())
//   })

//   return (
//     <div>
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell>IFRS(연결)</TableCell>
//             <TableCell align="right">2015/12</TableCell>
//             <TableCell align="right">2016/12</TableCell>
//             <TableCell align="right">2017/12</TableCell>
//             <TableCell align="right">2018/12</TableCell>
//             <TableCell align="right">2019/12</TableCell>
//             <TableCell align="right">2020/12(E)</TableCell>
//             <TableCell align="right">2021/12(E)</TableCell>
//             <TableCell align="right">2022/12(E)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.five}</TableCell>
//               <TableCell align="right">{row.six}</TableCell>
//               <TableCell align="right">{row.seven}</TableCell>
//               <TableCell align="right">{row.eight}</TableCell>
//               <TableCell align="right">{row.nine}</TableCell>
//               <TableCell align="right">{row.zero}</TableCell>
//               <TableCell align="right">{row.one}</TableCell>
//               <TableCell align="right">{row.two}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   );
// }

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


export default function StockFinancial() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const finance = useSelector(state => (state.stockReducer.finance))
  const rows = finance
  useEffect(() => {
    // let stockName = localStorage.getItem('stockName')
    // dispatch(stockActions.getFinance(stockName))
  }, [])

  console.log('finance = ' + finance)

  return (
    <div className={classes.location}>
      <h2>FINANCE INFO</h2>
      <br/>
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