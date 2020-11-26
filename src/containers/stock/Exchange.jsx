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


// export default function Exchange() {
//   const classes = useStyles();
//   const dispatch = useDispatch()
//   const recentNews = useSelector(state => (state.stockReducer.recentNews))
//   const rows = [recentNews]
//   useEffect(() => {
//     // dispatch(stockActions.getExchangeRate())
//   })

//   return (
//     <div>
//         <h2>환율정보</h2>
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
//               <TableCell align="right">{row.f_2015_12}</TableCell>
//               <TableCell align="right">{row.f_2016_12}</TableCell>
//               <TableCell align="right">{row.f_2017_12}</TableCell>
//               <TableCell align="right">{row.f_2018_12}</TableCell>
//               <TableCell align="right">{row.f_2019_12}</TableCell>
//               <TableCell align="right">{row.f_2020_12}</TableCell>
//               <TableCell align="right">{row.f_2021_12}</TableCell>
//               <TableCell align="right">{row.f_2022_12}</TableCell>
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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stockActions } from 'modules/stock.action';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExchangeInfo from './ExchangeInfo'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    location: {
      width: '1000px'
    }
  }));


export default function Exchange() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const recentNews = useSelector(state => (state.stockReducer.recentNews))
  const rows = [recentNews]
  const exchangeData = useSelector(state => (state.stockReducer.exchangeData))

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const stockName = localStorage.getItem('stockName')
    dispatch(stockActions.getExchangeData(stockName))
    // dispatch(stockActions.getExchange)
  })

  return (
    <div>
        <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="INFO" {...a11yProps(0)} />
        <Tab label="USD" {...a11yProps(1)} />
        <Tab label="JPY" {...a11yProps(2)} />
        <Tab label="EUR" {...a11yProps(3)} />
        <Tab label="CNY" {...a11yProps(4)} />
        <Tab label="ALL" {...a11yProps(5)} />
        <Tab label="MIXED" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExchangeInfo/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img src={require("assets/img/usd.png")} className={classes.location} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img src={require("assets/img/jpy.png")} className={classes.location}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img src={require("assets/img/eur.png")} className={classes.location}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <img src={require("assets/img/cny.png")} className={classes.location}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <img src={require("assets/img/all.png")} className={classes.location}/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <img src={require("assets/img/samsung.png")} className={classes.location}/>
      </TabPanel>
    </div>
    </div>
  );
}