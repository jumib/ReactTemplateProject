import React from 'react'
import News from './News'
import StockFinancial from './StockFinancial'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch, useSelector } from 'react-redux';
import { stockActions } from 'modules/stock.action';


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
  }));

const MainInfo = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const dispatch = useDispatch()
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // const finance = useSelector(state => (state.stockActions.finance))
    // console.log(finance)

    const clickFinance = (e) => {
        const stockName = '삼성전자'
        // dispatch(stockActions.getFinance(stockName))
    }

    return (
        <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="최근 관련 기사" {...a11yProps(0)} />
        <Tab label="기업 재무제표" {...a11yProps(1)} onClick={clickFinance} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <News/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StockFinancial/>
      </TabPanel>
    </div>
  );
}

export default MainInfo