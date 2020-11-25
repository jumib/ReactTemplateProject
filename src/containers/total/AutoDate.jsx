import { covidActions } from 'modules/covid.action'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

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


const AutoDate = () => {
    const classes = useStyles();

    const dispatch =  useDispatch()
    const autoLstm = useSelector(state => (state.covidReducer.autoLstm))

    useEffect(() => {
        // let stockName = localStorage.getItem('stockName')
        const stockName = localStorage.getItem('stockName')
        dispatch(covidActions.getAutoLstm(stockName))
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">종목명</TableCell>
                    <TableCell align="center">내일 예측값</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell align="right">{autoLstm.stockName}</TableCell>
                    <TableCell align="right">{autoLstm.pred}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>

        </div>
    )
}

export default AutoDate