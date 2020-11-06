import {createAction, handleActions} from 'redux-actions'
import { stockService } from './stock.service'

export const stockConstants = {
    GETSTOCKDATA_REQUEST : 'GETSTOCKDATA_REQUEST',
    GETSTOCKDATA_SUCCESS : 'GETSTOCKDATA_SUCCESS',
    GETSTOCKDATA_FAILURE : 'GETSTOCKDATA_FAILURE'
}

export const getStockDataSuccess = createAction(stockConstants.GETSTOCKDATA_SUCCESS);

const initialState = {
    stock: {}
}

const stockReducer = handleActions(
    { [stockConstants.GETSTOCKDATA_SUCCESS]: (state, action) => ({ stock: action.stock }) },
    initialState
)

export const stockActions = {
    getStockDate
}

function getStockDate(stockName){
    return dispatch => {
        dispatch(request({ stockName }))

        stockService.getStockDate(stockName)
            .then(
                stock => {
                    dispatch(success(stock))
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request(stock) { return { type: stockConstants.GETSTOCKDATA_REQUEST, stock } }
    function success(stock) { return { type: stockConstants.GETSTOCKDATA_SUCCESS, stock } }
    function failure(error) { return { type: stockConstants.GETSTOCKDATA_FAILURE, error  } }
}
