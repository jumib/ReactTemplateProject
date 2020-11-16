import {createAction, handleActions} from 'redux-actions'
import { stockService } from './stock.service'

export const stockConstants = {
    GETSTOCKDATA_REQUEST : 'STOCK_GETSTOCKDATA_REQUEST',
    GETSTOCKDATA_SUCCESS : 'STOCK_GETSTOCKDATA_SUCCESS',
    GETSTOCKDATA_FAILURE : 'STOCK_GETSTOCKDATA_FAILURE',

    GETFINANCE_REQUEST : 'STOCK_GETFINANCE_REQUEST',
    GETFINANCE_SUCCESS : 'STOCK_GETFINANCE_SUCCESS',
    GETFINANCE_FAILURE : 'STOCK_GETFINANCE_FAILURE',

    GETRECENTNEWS_REQUEST : 'GETRECENTNEWS_REQUEST',
    GETRECENTNEWS_SUCCESS : 'GETRECENTNEWS_SUCCESS',
    GETRECENTNEWS_FAILURE : 'GETRECENTNEWS_FAILURE'
}

export const getStockDataSuccess = createAction(stockConstants.GETSTOCKDATA_SUCCESS);
export const getFinanceSuccess = createAction(stockConstants.GETFINANCE_SUCCESS);
export const getRecentNewsSuccess = createAction(stockConstants.GETRECENTNEWS_SUCCESS);

const initialState = {
    stock: {},
    finance: {},
    recentNews: {}
}

const stockReducer = handleActions(
    { 
        [stockConstants.GETSTOCKDATA_SUCCESS]: (state, action) => ({ stock: action.stock }),
        [stockConstants.GETFINANCE_SUCCESS]: (state, action) => ({ finance: action.finance }),
        [stockConstants.GETRECENTNEWS_SUCCESS]: (state, action) => ({ recentNews: action.recentNews })
    },
    initialState
)

export const stockActions = {
    getStockData, getFinance, getRecentNews
}

function getStockData(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getStockData(stockName)
            .then(
                stock => {
                    dispatch(success(stock))
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request(stockName) { return { type: stockConstants.GETSTOCKDATA_REQUEST, stockName } }
    function success(stock) { return { type: stockConstants.GETSTOCKDATA_SUCCESS, stock } }
    function failure(error) { return { type: stockConstants.GETSTOCKDATA_FAILURE, error  } }
}

function getFinance(){
    return dispatch => {
        dispatch(request())

        stockService.getFinance()
            .then(
                finance => {
                    dispatch(success(finance))
                    console.log(finance)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request() { return { type: stockConstants.GETFINANCE_REQUEST } }
    function success(finance) { return { type: stockConstants.GETFINANCE_SUCCESS, finance } }
    function failure(error) { return { type: stockConstants.GETFINANCE_FAILURE, error  } }
}

function getRecentNews(){
    return dispatch => {
        dispatch(request())

        stockService.getRecentNews()
            .then(
                recentNews => {
                    dispatch(success(recentNews))
                    console.log(recentNews)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request() { return { type: stockConstants.GETRECENTNEWS_REQUEST } }
    function success(recentNews) { return { type: stockConstants.GETRECENTNEWS_SUCCESS, recentNews } }
    function failure(error) { return { type: stockConstants.GETRECENTNEWS_FAILURE, error  } }
}

export default stockReducer