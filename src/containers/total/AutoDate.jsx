import { covidActions } from 'modules/covid.action'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AutoDate = () => {

    const dispatch =  useDispatch()
    const autoLstm = useSelector(state => (state.covidReducer.autoLstm))

    useEffect(() => {
        // dispatch(covidActions.getAutoLstm())
    }, [])

    return (
        <div>
            <img src={require("assets/img/matplotlib.png")} />
        </div>
    )
}

export default AutoDate