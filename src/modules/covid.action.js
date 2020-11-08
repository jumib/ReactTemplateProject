import { createAction, handleActions } from 'redux-actions'
import { covidService } from './covid.service'
import history from '../history'

export const covidConstants = {
    GETDECIDE_REQUEST : 'GETDECIDE_REQUEST',
    GETDECIDE_SUCCESS : 'GETDECIDE_SUCCESS',
    GETDECIDE_FAILURE : 'GETDECIDE_FAILURE',
}

export const getDecideSuccess = createAction(covidConstants.GETDECIDE_SUCCESS);

const initialState = {
    covid: {}
}

const covidReducer = handleActions(
    { [covidConstants.GETDECIDE_SUCCESS]: (state, action) => ({ covid: action.covid }) },
    initialState
)


export const covidActions = {
    getDecide
}

function getDecide() {
    return dispatch => {
        dispatch(request())

        covidService.getDecide()
        .then(
            covid => {
                dispatch(success(covid))
                history.push('/covid')
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }

    function request() { return { type: covidConstants.GETDECIDE_REQUEST } }
    function success(covid) { return { type: covidConstants.GETDECIDE_SUCCESS, covid } }
    function failure(error) { return { type: covidConstants.GETDECIDE_FAILURE, error } }
}


export default covidReducer
