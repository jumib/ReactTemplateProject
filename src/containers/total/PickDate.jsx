// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// // import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';



// const PickDate = () => {
//     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//     };

//     return (
//         <>
//         <p>날짜 선택하기</p>
//         <div>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <Grid container justify="space-around">
//             <KeyboardDatePicker
//             margin="normal"
//             id="date-picker-dialog"
//             label="Date picker dialog"
//             format="MM/dd/yyyy"
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//                 'aria-label': 'change date',
//             }}
//             />
//         </Grid>
//         </MuiPickersUtilsProvider>
//         </div>
//         </>
//     )
// }

// export default PickDate

import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { covidActions } from 'modules/covid.action';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarContent } from '@material-ui/core';

const styles = {
    textCenter: {
      textAlign: "center",
      maxwidth: '1200px',
    },
    textMuted: {
      color: "#6c757d"
    },
    location: {
        padding: '0 90px '
    }
  };

const useStyles = makeStyles(styles);


    const stockName = localStorage.getItem('stockName')

    const PickDate = () => {

        const classes = useStyles();
    const [date, setDate] = useState('');
    const dispatch = useDispatch()
    const totalLstm = useSelector(state => (state.covidReducer.totalLstm))
   
    for(var key in totalLstm) {

      if(key === 'datas') {
          console.log(JSON.stringify(totalLstm[key]))
      }
    }
    const rows = JSON.stringify(totalLstm[key])
    console.log("rows : " + rows)
    
    
    return (
        <>
        <p>날짜 선택하기</p>
        <div>
        <input type='text' onChange={e => setDate(`${e.target.value}`)}/>
        <button onClick={e => dispatch(covidActions.getTotalLstm(stockName,date))}>검색</button>
            {/* <img src={require()} /> */}
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">날짜</TableCell>
                    <TableCell align="center">실제값</TableCell>
                    <TableCell align="center">예측값</TableCell>
                </TableRow>
                </TableHead>
                { rows !== undefined ? 
                  <TableBody>
                    {[rows].map((row) => (
                      <TableRow key={row.date}>
                        <TableCell component="th" scope="row">
                          {row.date}
                        </TableCell>
                              <TableCell align="right">{row.pred}</TableCell>
                              <TableCell align="right">{row.real}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                : <></>
                  }
            </Table>
            </TableContainer>
        </div>
        </>
    )
}

export default PickDate