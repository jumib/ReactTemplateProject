import { createAction, handleActions } from 'redux-actions'
import { covidService } from './covid.service'

export const covidConstants = {
    GETDECIDE_REQUEST : 'GETDECIDE_REQUEST',
    GETDECIDE_SUCCESS : 'GETDECIDE_SUCCESS',
    GETDECIDE_FAILURE : 'GETDECIDE_FAILURE',
}

export const getDecideSuccess = createAction(covidConstants.GETDECIDE_SUCCESS);

const initialState = {
    decide: {}
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
            decide => {
                dispatch(success(decide))
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }

    function request() { return { type: covidConstants.GETDECIDE_REQUEST } }
    function success(decide) { return { type: covidConstants.GETDECIDE_SUCCESS, decide } }
    function failure(error) { return { type: covidConstants.GETDECIDE_FAILURE, error } }
}
