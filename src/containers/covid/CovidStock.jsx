import React from 'react'
import { useDispatch } from 'react-redux'
import CovidStockChart from './CovidStockChart'
import CovidDecideChart from './CovidDecideChart'
import { covidActions } from '../../modules/covid.action'
import CovidStatus from './CovidStatus'


const CovidStock = () => {

    const dispatch = useDispatch()

    return (<>
    {/* <CovidStatus/> */}
    <h2>확진자</h2>
    {/* <button onClick={e => dispatch(covidActions.getDecide())}>Show</button> */}
    <CovidDecideChart />
    <CovidStockChart />
    </>
    )}

export default CovidStock