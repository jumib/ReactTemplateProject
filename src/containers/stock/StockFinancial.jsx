import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useStyles = makeStyles({
    table: {
      maxWidth: 800,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    location: {
      padding: '70px',
      alignContent: 'center'
    }
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const StockFinancial = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      // dispatch(stockActions.getFinance())
    }, [])



    return (<div className={classes.location}>
    
    <h3>재무제표</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>기업정보</TableCell>
            <TableCell align="right">1/4분기</TableCell>
            <TableCell align="right">2/4분기</TableCell>
            <TableCell align="right">3/4분기</TableCell>
            <TableCell align="right">4/4분기</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <h3>counting ...</h3>
        <p>%%%의 당기순이익은 %원으로 예측되었습니다.</p>
    </div>
    </TableContainer>
    <hr></hr>
    </div>)}

export default StockFinancial