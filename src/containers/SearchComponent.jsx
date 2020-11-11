import { Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stockActions } from '../modules/stock.action'

const SearchComponent = () => {
    
    const [stockName, setStockName] = useState('')
    console.log(stockName)
    const dispatch = useDispatch()

    function search () {
        dispatch(stockActions.getStockData())
    }

    return (
        <div>
        <input type="text" size="100" onChange={e => setStockName(`${e.target.value}`)}/>
        <button onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchComponent
