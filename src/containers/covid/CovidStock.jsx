import React from 'react'
import { useDispatch } from 'react-redux'
import Chart from '../../containers/Chart'
import { covidActions } from '../../modules/covid.action'

const CovidStock = () => {

    const dispatch = useDispatch()

    return (<>
    
    <h2>확진자 추이에 따른 주가변동</h2>
    <button onClick={e => dispatch(covidActions.getDecide())}>Show</button>
    <Chart />
    <p>확진자와 주가 관계 그래프</p>           
    </>
    )}

export default CovidStock