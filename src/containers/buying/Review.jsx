import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Buying from 'templates/Buying/Buying';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'modules/user.action';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  location: {
      padding: '80px',
      height: '600px'
  }
}));
// payment:
// cnt: 20
// date: "2020-10-20"
// money: 1234
// name: "ttaa"
// price: 12312
// type: "a"


export default function Review() {
  const classes = useStyles();
  // const dispatch = useDispatch()

  // const payment = useSelector(state => (state.userReducer.payment))
  // const rows = payment

  const [reivews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
      const fetchReviews = async () => {
        try {
          
          const user = sessionStorage.getItem('user')
          
          setReviews(null);
          
          setLoading(true);
          const response = await axios.get(
            `http://192.168.0.10:8080/api/mypage/${user}`
          );
          setReviews(response.data);
          // alert(JSON.stringify(response.data)) 
          // console.log(response.data)
          // console.log(response.data)
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchReviews();
    }, []);

    if (loading) return <div>..</div>;
    if (error) return <div>error</div>;
    if (!reivews) return null;

  // useEffect(() => {
  //   const name = 'test'
  //   dispatch(userActions.getAll(name))
  // }, [])

  return (
    <div className={classes.location}>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">종목명</TableCell>
            <TableCell align="center">매매타입</TableCell>
            <TableCell align="center">날짜</TableCell>
            <TableCell align="center">가격</TableCell>
            <TableCell align="center">개수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {reivews.map((row) => (
            <TableRow key={row.username}>
              <TableCell align="center">{row.stockname}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.cnt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
  );
}