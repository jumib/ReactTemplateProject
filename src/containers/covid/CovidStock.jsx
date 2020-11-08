import React from 'react'
import { useDispatch } from 'react-redux'
import Chart from '../../containers/Chart'
import { covidActions } from '../../modules/covid.action'


const CovidStock = () => {

    const dispatch = useDispatch()

    return (<>
    
    <h2>확진자</h2>
    <button onClick={e => dispatch(covidActions.getDecide())}>Show</button>
    <Chart />
    <p>주가그래프</p>           
    </>
    )}

export default CovidStock