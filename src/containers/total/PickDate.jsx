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

    const stockName = localStorage.getItem('stockName')

    const PickDate = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const dispatch = useDispatch()
    const totalLstm = useSelector(state => (state.covidReducer.totalLstm))
    const pickdata = {
        'stockName' : stockName ,
        'date' : selectedDate
    }

    return (
        <>
        <p>날짜 선택하기</p>
        <div>
        <input type='text' onChange={e => setSelectedDate(`${e.target.value}`)}/>
        <button onClick={e => dispatch(covidActions.getTotalLstm(pickdata))}>검색</button>
        <div>
            { totalLstm != '' ? ( 
                <p>이미지</p>) 
                : ( null )}
        </div>
        </div>
        </>
    )
}

export default PickDate