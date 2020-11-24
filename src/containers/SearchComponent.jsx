import { makeStyles } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stockActions } from '../modules/stock.action'

const useStyles = makeStyles({
    search: {
        alignContent: 'center',
        height: '50px',
        width: '1000px',
        
    }
})

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
    console.log(stockName)


    const classes = useStyles()

    return (
        <div>
        <input className={classes.search} type="text" size="100" onChange={e => setStockName(`${e.target.value}`)} />
        <button onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchComponent
