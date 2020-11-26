import React, {useEffect, useState} from 'react'
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
import axios from 'axios';

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

const CovidStatus = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    // const status = useSelector(state => (state.covidReducer.status))

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchStatus = async () => {
        try {
          
          setStatus(null);
          
          setLoading(true);
          const response = await axios.get(
            `http://192.168.0.10:8080/api/board/covid`
          );
          setStatus(response.data);
          // alert(JSON.stringify(response.data)) 
          // console.log(response.data)
          console.log(response.data)
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchStatus();
    }, []);

    if (loading) return <div>..</div>;
    if (error) return <div>error</div>;
    if (!status) return null;

    // useEffect(() => {
    //     dispatch(covidActions.getStatus())
    // }, [])


    return (
        <div className={classes.location}>
        <Card className={classes.textCenter}>
      <CardHeader><h2>코로나 현황판</h2></CardHeader>
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
              <TableCell align="right">{status.DECIDE_CNT}</TableCell>
              <TableCell align="right">{status.DEATH_CNT}</TableCell>
              <TableCell align="right">{status.CLEAR_CNT}</TableCell>
              <TableCell align="right">{status.CRITICAL_CNT}</TableCell>
              <TableCell align="right">{status.ACC_EXAM_CNT}</TableCell>
              <TableCell align="right">{status.EXAM_CNT}</TableCell>
              <TableCell align="right">{status.RESUTL_NEG_CNT}</TableCell>
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