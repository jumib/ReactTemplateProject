import {createAction, handleActions} from 'redux-actions'
import { stockService } from './stock.service'
import history from '../history'


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

    GETEMOTION_REQUEST : 'STOCK_GETEMOTION_REQUEST',
    GETEMOTION_SUCCESS : 'STOCK_GETEMOTION_SUCCESS',
    GETEMOTION_FAILURE : 'STOCK_GETEMOTION_FAILURE',
}

export const getStockDataSuccess = createAction(stockConstants.GETSTOCKDATA_SUCCESS);
export const getFinanceSuccess = createAction(stockConstants.GETFINANCE_SUCCESS);
export const getRecentNewsSuccess = createAction(stockConstants.GETRECENTNEWS_SUCCESS);
// export const getExpPriceSuccess = createAction(stockConstants.GETEXPPRICE_SUCCESS);
export const getExchangeRateSuccess = createAction(stockConstants.GETEXCHANGERATE_SUCCESS);
export const getEmotionSuccess = createAction(stockConstants.GETEMOTION_SUCCESS);

const initialState = {
    stock: [],
    finance: [],
    recentNews: [],
    // expPrice: [],
    exchangeRate: [],
    emotion: {}
}

const stockReducer = handleActions(
    { 
        [stockConstants.GETSTOCKDATA_SUCCESS]: (state, action) => ({ stock: action.stock }),
        [stockConstants.GETFINANCE_SUCCESS]: (state, action) => ({ finance: action.finance }),
        [stockConstants.GETRECENTNEWS_SUCCESS]: (state, action) => ({ recentNews: action.recentNews }),
        // [stockConstants.GETEXPPRICE_SUCCESS]: (state, action) => ({ expPrice: action.expPrice }),
        [stockConstants.GETEXCHANGERATE_SUCCESS]: (state, action) => ({ exchangeRate: action.exchangeRate }),
        [stockConstants.GETEMOTION_SUCCESS]: (state, action) => ({ emotion: action.emotion }),
    },
    initialState
)

export const stockActions = {
    getStockData, getFinance, getRecentNews, getExchangeRate, getEmotion
    // getExpPrice,
}

function getStockData(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getStockData(stockName)
            .then(
                stock => {
                    dispatch(success(stock))
                    history.push('/covid')
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

function getFinance(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getFinance(stockName)
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

    function request(stockName) { return { type: stockConstants.GETFINANCE_REQUEST, stockName } }
    function success(finance) { return { type: stockConstants.GETFINANCE_SUCCESS, finance } }
    function failure(error) { return { type: stockConstants.GETFINANCE_FAILURE, error  } }
}

function getRecentNews(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getRecentNews(stockName)
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

    function request(stockName) { return { type: stockConstants.GETRECENTNEWS_REQUEST, stockName } }
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

function getExchangeRate(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getExchangeRate(stockName)
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

    function request(stockName) { return { type: stockConstants.GETEXCHANGERATE_REQUEST, stockName } }
    function success(exchangeRate) { return { type: stockConstants.GETEXCHANGERATE_SUCCESS, exchangeRate } }
    function failure(error) { return { type: stockConstants.GETEXCHANGERATE_FAILURE, error } }
}

function getEmotion(){
    return dispatch => {
        dispatch(request())

        stockService.getEmotion()
            .then(
                emotion => {
                    dispatch(success(emotion))
                    console.log(emotion)
                    history.push('/stock')
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request() { return { type: stockConstants.GETEMOTION_REQUEST } }
    function success(emotion) { return { type: stockConstants.GETEMOTION_SUCCESS, emotion } }
    function failure(error) { return { type: stockConstants.GETEMOTION_FAILURE, error } }
}

export default stockReducer