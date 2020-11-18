import React from 'react'
import News from './News'
import StockFinancial from './StockFinancial'
import {Link} from 'react-router-dom'

const MainInfo = () => {
    return (
        <div>
            <News/>
            <StockFinancial/>
            <br/>
            <Link to="/stock">더 많은 정보 보기</Link>
        </div>
    )
}

export default MainInfo