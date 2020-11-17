import {createAction, handleActions} from 'redux-actions'
import { stockService } from './stock.service'

export const stockConstants = {
    GETSTOCKDATA_REQUEST : 'STOCK_GETSTOCKDATA_REQUEST',
    GETSTOCKDATA_SUCCESS : 'STOCK_GETSTOCKDATA_SUCCESS',
    GETSTOCKDATA_FAILURE : 'STOCK_GETSTOCKDATA_FAILURE',

    GETFINANCE_REQUEST : 'STOCK_GETFINANCE_REQUEST',
    GETFINANCE_SUCCESS : 'STOCK_GETFINANCE_SUCCESS',
    GETFINANCE_FAILURE : 'STOCK_GETFINANCE_FAILURE',

    GETRECENTNEWS_REQUEST : 'STOCK_GETRECENTNEWS_REQUEST',
    GETRECENTNEWS_SUCCESS : 'STOCK_GETRECENTNEWS_SUCCESS',
    GETRECENTNEWS_FAILURE : 'STOCK_GETRECENTNEWS_FAILURE',

    // GETEXPPRICE_REQUEST : 'STOCK_GETEXPPRICE_REQUEST',
    // GETEXPPRICE_SUCCESS : 'STOCK_GETEXPPRICE_SUCCESS',
    // GETEXPPRICE_FAILURE : 'STOCK_GETEXPPRICE_FAILURE',

    GETEXCHANGERATE_REQUEST : 'STOCK_GETEXCHANGERATE_REQUEST',
    GETEXCHANGERATE_SUCCESS : 'STOCK_GETEXCHANGERATE_SUCCESS',
    GETEXCHANGERATE_FAILURE : 'STOCK_GETEXCHANGERATE_FAILURE',
}

export const getStockDataSuccess = createAction(stockConstants.GETSTOCKDATA_SUCCESS);
export const getFinanceSuccess = createAction(stockConstants.GETFINANCE_SUCCESS);
export const getRecentNewsSuccess = createAction(stockConstants.GETRECENTNEWS_SUCCESS);
// export const getExpPriceSuccess = createAction(stockConstants.GETEXPPRICE_SUCCESS);
export const getExchangeRateSuccess = createAction(stockConstants.GETEXCHANGERATE_SUCCESS);

const initialState = {
    stock: [],
    finance: [],
    recentNews: [],
    // expPrice: [],
    exchangeRate: []
}

const stockReducer = handleActions(
    { 
        [stockConstants.GETSTOCKDATA_SUCCESS]: (state, action) => ({ stock: action.stock }),
        [stockConstants.GETFINANCE_SUCCESS]: (state, action) => ({ finance: action.finance }),
        [stockConstants.GETRECENTNEWS_SUCCESS]: (state, action) => ({ recentNews: action.recentNews }),
        // [stockConstants.GETEXPPRICE_SUCCESS]: (state, action) => ({ expPrice: action.expPrice }),
        [stockConstants.GETEXCHANGERATE_SUCCESS]: (state, action) => ({ exchangeRate: action.exchangeRate })
    },
    initialState
)

export const stockActions = {
    getStockData, getFinance, getRecentNews, getExchangeRate,
    // getExpPrice,
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

// function getExpPrice(){
//     return dispatch => {
//         dispatch(request())

//         stockService.getExpPrice()
//             .then(
//                 expPrice => {
//                     dispatch(success(expPrice))
//                     console.log(expPrice)
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                 }
//             )
//     }

//     function request() { return { type: stockConstants.GETEXPPRICE_REQUEST } }
//     function success(expPrice) { return { type: stockConstants.GETEXPPRICE_SUCCESS, expPrice } }
//     function failure(error) { return { type: stockConstants.GETEXPPRICE_FAILURE, error } }
// }

function getExchangeRate(){
    return dispatch => {
        dispatch(request())

        stockService.getExchangeRate()
            .then(
                exchangeRate => {
                    dispatch(success(exchangeRate))
                    console.log(exchangeRate)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request() { return { type: stockConstants.GETEXCHANGERATE_REQUEST } }
    function success(exchangeRate) { return { type: stockConstants.GETEXCHANGERATE_SUCCESS, exchangeRate } }
    function failure(error) { return { type: stockConstants.GETEXCHANGERATE_FAILURE, error } }
}

export default stockReducer