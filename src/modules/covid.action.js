import { createAction, handleActions } from 'redux-actions'
import { covidService } from './covid.service'
import history from '../history'

export const covidConstants = {
    GETDECIDE_REQUEST : 'COVID_GETDECIDE_REQUEST',
    GETDECIDE_SUCCESS : 'COVID_GETDECIDE_SUCCESS',
    GETDECIDE_FAILURE : 'COVID_GETDECIDE_FAILURE',

    GETSTATUS_REQUEST : 'COVID_GETSTATUS_REQUEST',
    GETSTATUS_SUCCESS : 'COVID_GETSTATUS_SUCCESS',
    GETSTATUS_FAILURE : 'COVID_GETSTATUS_FAILURE',

    GETWORDS_REQUEST : 'COVID_GETWORDS_REQUEST',
    GETWORDS_SUCCESS : 'COVID_GETWORDS_SUCCESS',
    GETWORDS_FAILURE : 'COVID_GETWORDS_FAILURE',

    GETTOTALLSTM_REQUEST : 'COVID_GETTOTALLSTM_REQUEST',
    GETTOTALLSTM_SUCCESS : 'COVID_GETTOTALLSTM_SUCCESS',
    GETTOTALLSTM_FAILURE : 'COVID_GETTOTALLSTM_FAILURE',

    // GETSTOCKPRICE_REQUEST : 'COVID_GETSTOCKPRICE_REQUEST',
    // GETSTOCKPRICE_SUCCESS : 'COVID_GETSTOCKPRICE_SUCCESS',
    // GETSTOCKPRICE_FAILURE : 'COVID_GETSTOCKPRICE_FAILURE',
}

export const getDecideSuccess = createAction(covidConstants.GETDECIDE_SUCCESS);
export const getStatusSuccess = createAction(covidConstants.GETSTATUS_SUCCESS);
export const getWordsSuccess = createAction(covidConstants.GETWORDS_SUCCESS);
export const getTotalLstmSuccess = createAction(covidConstants.GETTOTALLSTM_SUCCESS);
// export const getStockpriceSuccess = createAction(covidConstants.GETSTOCKPRICE_SUCCESS);

const initialState = {
    covid: {},
    status: {},
    words: {},
    totalLstm: []
    // stockprice: {}
}

const covidReducer = handleActions(
    { 
        [covidConstants.GETDECIDE_SUCCESS]: (state, action) => ({ covid: action.covid }),
        [covidConstants.GETSTATUS_SUCCESS]: (state, action) => ({ status: action.status }),
        [covidConstants.GETWORDS_SUCCESS]: (state, action) => ({ words: action.words }),
        [covidConstants.GETTOTALLSTM_SUCCESS] : (state, action) => ({ totalLstm: action.totalLstm })
        // [covidConstants.GETSTOCKPRICE_SUCCESS]: (state, action) => ({ stockprice: action.stockprice }) 
    },
    initialState
)


export const covidActions = {
    getDecide, getStatus, getWords, getTotalLstm
    // getStockprice
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

function getStatus() {
    return dispatch => {
        dispatch(request())

        covidService.getStatus()
        .then(
            status => {
                dispatch(success(status))
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function request() { return { type: covidConstants.GETSTATUS_REQUEST } }
    function success(status) { return { type: covidConstants.GETSTATUS_SUCCESS, status } }
    function failure(error) { return { type: covidConstants.GETSTATUS_FAILURE, error } }
}

function getWords() {
    return dispatch => {
        dispatch(request())

        covidService.getWords()
        .then(
            words => {
                dispatch(success(words))
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function request() { return { type: covidConstants.GETWORDS_REQUEST } }
    function success(words) { return { type: covidConstants.GETWORDS_SUCCESS, words } }
    function failure(error) { return { type: covidConstants.GETWORDS_FAILURE, error } }
}

function getTotalLstm(stockName) {
    return dispatch => {
        dispatch(request(stockName))

        covidService.getTotalLstm(stockName)
        .then(
            totalLstm => {
                dispatch(success(totalLstm))
            },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function request(stockName) { return { type: covidConstants.GETTOTALLSTM_REQUEST, stockName } }
    function success(totalLstm) { return { type: covidConstants.GETTOTALLSTM_SUCCESS, totalLstm } }
    function failure(error) { return { type: covidConstants.GETTOTALLSTM_FAILURE, error } }
}

// function getStockprice(stockName) {
//     return dispatch => {
//         dispatch(request(stockName))

//         covidService.getStockprice(stockName)
//         .then(
//             stockprice => {
//                 dispatch(success(stockprice))
//             },
//             error => {
//                 dispatch(failure(error.toString()));
//             }
//         )
//     }
//     function request(stockName) { return { type: covidConstants.GETSTOCKPRICE_REQUEST, stockName } }
//     function success(stockprice) { return { type: covidConstants.GETSTOCKPRICE_SUCCESS, stockprice } }
//     function failure(error) { return { type: covidConstants.GETSTOCKPRICE_FAILURE, error } }
// }

export default covidReducer
