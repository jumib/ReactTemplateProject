import { color } from '@amcharts/amcharts4/core'
import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stockActions } from '../modules/stock.action'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    // search: {
    //     alignContent: 'center',
    //     height: '50px',
    //     width: '1000px',
    //     maxWidth: 'auto',
    // },
    label: {
        textAlign: 'center',
        color: 'black'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        alignContent: 'center',
        height: '50px',
        width: '800px',
        maxWidth: 'auto',
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(2, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '200ch',
        },
        },
}))

const SearchComponent = () => {
    
    const [stockName, setStockName] = useState('')
    const dispatch = useDispatch()

    const recentNews = useSelector(state => (state.stockReducer.recentNews))
    localStorage.setItem('recentNews', recentNews)
    // localStorage.setItem('stockprice', stock)


    function search () {
        dispatch(stockActions.getRecentNews(stockName))
    }
    
    localStorage.setItem('stockName', stockName);
    // console.log(stockName)


    const classes = useStyles()

    return (
      <Grid item xs={12}>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div>
            <InputBase
              placeholder="Search… 알아보고 싶은 종목을 검색해보세요 !"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setStockName(`${e.target.value}`)}
            />
            {/* <label className={classes.label}>알아보고 싶은 종목을 검색해보세요</label>
            <input className={classes.search} type="text" size="100" onChange={e => setStockName(`${e.target.value}`)} /> */}
            </div>
          </div>
          <div>      
              <Button variant="outlined" onClick={search}>search</Button>
        {/* <button onClick={search}>SEARCH</button> */}
        </div>   
      </Grid>       
    )
}

export default SearchComponent