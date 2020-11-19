import { makeStyles } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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

    function search () {
        // dispatch(stockActions.getStockData(stockName))
    }

    // localStorage.setItem('stockName', stockName);

    const classes = useStyles()

    return (
        <div>
        <input className={classes.search} type="text" size="100" onChange={e => setStockName(`${e.target.value}`)} />
        <button onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchComponent
