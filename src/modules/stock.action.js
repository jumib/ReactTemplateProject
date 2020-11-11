import {createAction, handleActions} from 'redux-actions'
import { stockService } from './stock.service'

export const stockConstants = {
    GETSTOCKDATA_REQUEST : 'STOCK_GETSTOCKDATA_REQUEST',
    GETSTOCKDATA_SUCCESS : 'STOCK_GETSTOCKDATA_SUCCESS',
    GETSTOCKDATA_FAILURE : 'STOCK_GETSTOCKDATA_FAILURE',

    GETFINANCE_REQUEST : 'STOCK_GETFINANCE_REQUEST',
    GETFINANCE_SUCCESS : 'STOCK_GETFINANCE_SUCCESS',
    GETFINANCE_FAILURE : 'STOCK_GETFINANCE_FAILURE',
}

export const getStockDataSuccess = createAction(stockConstants.GETSTOCKDATA_SUCCESS);
export const getFinanceSuccess = createAction(stockConstants.GETFINANCE_SUCCESS);

const initialState = {
    stock: {},
    finance: {}
}

const stockReducer = handleActions(
    { 
        [stockConstants.GETSTOCKDATA_SUCCESS]: (state, action) => ({ stock: action.stock }),
        [stockConstants.GETFINANCE_SUCCESS]: (state, action) => ({ finance: action.finance }),
    },
    initialState
)

export const stockActions = {
    getStockData, getFinance
}

function getStockData(){
    return dispatch => {
        dispatch(request())

        stockService.getStockData()
            .then(
                stock => {
                    dispatch(success(stock))
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request() { return { type: stockConstants.GETSTOCKDATA_REQUEST } }
    function success(stock) { return { type: stockConstants.GETSTOCKDATA_SUCCESS, stock } }
    function failure(error) { return { type: stockConstants.GETSTOCKDATA_FAILURE, error  } }
}

function getFinance(stockName){
    return dispatch => {
        dispatch(request({ stockName }))

        stockService.getFinance(stockName)
            .then(
                finance => {
                    dispatch(success(finance))
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request(stockName) { return { type: stockConstants.GETSTOCKDATA_REQUEST, stockName } }
    function success(finance) { return { type: stockConstants.GETSTOCKDATA_SUCCESS, finance } }
    function failure(error) { return { type: stockConstants.GETSTOCKDATA_FAILURE, error  } }
}

export default stockReducer