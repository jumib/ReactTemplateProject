import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stockActions } from '../modules/stock.action'

const SearchComponent = () => {
    
    const [stockName, setStockName] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
        <input type="text" size="100" onChange={e => setStockName(`${e.target.value}`)}/>
        <button onClick={e => dispatch(stockActions.getStockData(stockName))}>SEARCH</button>
        </div>
    )
}

export default SearchComponent
