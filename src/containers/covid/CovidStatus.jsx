import React, {useEffect} from 'react'
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { makeStyles } from "@material-ui/core/styles";
import CardFooter from "components/Card/CardFooter.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { covidActions } from 'modules/covid.action';
import { useDispatch, useSelector } from 'react-redux';

const styles = {
  textCenter: {
    textAlign: "center",
    width: '1200px',
  },
  textMuted: {
    color: "#6c757d"
  },
  location: {
      padding: '0 90px '
  }
};

const useStyles = makeStyles(styles);

const CovidStatus = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const status = useSelector(state => (state.covidReducer.status))

    useEffect(() => {
        // dispatch(covidActions.getStatus())
    }, [])


    return (
        <div className={classes.location}>
        <Card className={classes.textCenter}>
      <CardHeader color="success"><h4>코로나 현황</h4></CardHeader>
      <CardBody>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">확진자</TableCell>
            <TableCell align="center">사망자</TableCell>
            <TableCell align="center">격리해제</TableCell>
            <TableCell align="center">치명률</TableCell>
            <TableCell align="center">총검사자</TableCell>
            <TableCell align="center">검사중</TableCell>
            <TableCell align="center">결과 음성</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align="center">{status.DECIDE_COUNT}</TableCell>
                <TableCell align="center">468</TableCell>
                <TableCell align="center">24,395</TableCell>
                <TableCell align="center">1.75%</TableCell>
                <TableCell align="center">2,636,650</TableCell>
                <TableCell align="center">25,524</TableCell>
                <TableCell align="center">2,584,394</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </CardBody>
      <CardFooter className={classes.textMuted}>
          20.11.10 기준
      </CardFooter>
    </Card>
        </div>
    )
}

export default CovidStatus