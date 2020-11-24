// import React from 'react'
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
//     table: {
//       minWidth: 650,
//     },
//     location: {
//       padding: '80px'
//     }
//   });

// const ExchangeInfo = () => {

//     const exchangeRate = useSelector(state => (state.stockReducer.exchangeRate))
//     const classes = useStyles();
//     const dispatch = useDispatch()

//     useEffect(() => {
//         // dispatch(stockActions.getExchangeRate())
//     })


//     return (
//         <div className={classes.location}>
//       <h4>최근 5개년 환율 정보</h4>
//       <br/>
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="right">NO.</TableCell>
//             <TableCell align="right">DATE</TableCell>
//             <TableCell align="right">USD</TableCell>
//             <TableCell align="right">JPY</TableCell>
//             <TableCell align="right">EUR</TableCell>
//             <TableCell align="right">CNY</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {exchangeRate.map((row) => (
//             <TableRow key={row.no}>
//               <TableCell component="th" scope="row">
//                 {row.no}
//               </TableCell>
//               <TableCell align="right">{row.date}</TableCell>
//               <TableCell align="right">{row.usd}</TableCell>
//               <TableCell align="right">{row.jpy}</TableCell>
//               <TableCell align="right">{row.eur}</TableCell>
//               <TableCell align="right">{row.cny}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//     )
// }
// export default ExchangeInfo



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockActions } from 'modules/stock.action';
import TableHead from '@material-ui/core/TableHead';


const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    width: 800
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

  // const classes = useStyles();
  //const rows = recentNews
// const rows = recentNews.sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    width: '300',
  },
});

export default function CustomPaginationActionsTable() {
  const dispatch = useDispatch()
  const exchangeRate = useSelector(state => (state.stockReducer.exchangeRate))
  const rows = exchangeRate.sort((a, b) => (a.calories < b.calories ? -1 : 1));

  useEffect(() => {

     // let stockName = localStorage.getItem('stockName')
     // dispatch(stockActions.getRecentNews(stockName))
     const stockName = '삼성전자'
     dispatch(stockActions.getExchangeRate())
  }, [])

  
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <h4>최근 5개년 환율 정보</h4>
      <Table className={classes.table} aria-label="custom pagination table">
         <TableHead>
           <TableRow>
             <TableCell align="center">DATE</TableCell>
             <TableCell align="center">USD</TableCell>
             <TableCell align="center">JPY</TableCell>
             <TableCell align="center">EUR</TableCell>
             <TableCell align="center">CNY</TableCell>
           </TableRow>
         </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.no}>
               <TableCell align="center">{row.date}</TableCell>
               <TableCell align="center">{row.usd}</TableCell>
               <TableCell align="center">{row.jpy}</TableCell>
               <TableCell align="center">{row.eur}</TableCell>
               <TableCell align="center">{row.cny}</TableCell>
             </TableRow>
          ))}

          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[20]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}