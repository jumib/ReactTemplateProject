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

    GETEXCHANGEDATA_REQUEST : 'STOCK_GETEXCHANGEDATA_REQUEST',
    GETEXCHANGEDATA_SUCCESS : 'STOCK_GETEXCHANGEDATA_SUCCESS',
    GETEXCHANGEDATA_FAILURE : 'STOCK_GETEXCHANGEDATA_FAILURE',

    GETEXCHANGE_REQUEST : 'STOCK_GETEXCHANGE_REQUEST',
    GETEXCHANGE_SUCCESS : 'STOCK_GETEXCHANGE_SUCCESS',
    GETEXCHANGE_FAILURE : 'STOCK_GETEXCHANGE_FAILURE',

    GETEMOTION_REQUEST : 'STOCK_GETEMOTION_REQUEST',
    GETEMOTION_SUCCESS : 'STOCK_GETEMOTION_SUCCESS',
    GETEMOTION_FAILURE : 'STOCK_GETEMOTION_FAILURE',
}

export const getStockDataSuccess = createAction(stockConstants.GETSTOCKDATA_SUCCESS);
export const getFinanceSuccess = createAction(stockConstants.GETFINANCE_SUCCESS);
export const getRecentNewsSuccess = createAction(stockConstants.GETRECENTNEWS_SUCCESS);
// export const getExpPriceSuccess = createAction(stockConstants.GETEXPPRICE_SUCCESS);
export const getExchangeDataSuccess = createAction(stockConstants.GETEXCHANGEDATA_SUCCESS);
export const getExchangeSuccess = createAction(stockConstants.GETEXCHANGE_SUCCESS);
export const getEmotionSuccess = createAction(stockConstants.GETEMOTION_SUCCESS);

const initialState = {
    stock: [],
    finance: [],
    recentNews: [],
    // expPrice: [],
    exchangeData: [],
    exchange: [],
    emotion: {}
}

const stockReducer = handleActions(
    { 
        [stockConstants.GETSTOCKDATA_SUCCESS]: (state, action) => ({ stock: action.stock }),
        [stockConstants.GETFINANCE_SUCCESS]: (state, action) => ({ finance: action.finance }),
        [stockConstants.GETRECENTNEWS_SUCCESS]: (state, action) => ({ recentNews: action.recentNews }),
        // [stockConstants.GETEXPPRICE_SUCCESS]: (state, action) => ({ expPrice: action.expPrice }),
        [stockConstants.GETEXCHANGEDATA_SUCCESS]: (state, action) => ({ exchangeRate: action.exchangeData }),
        [stockConstants.GETEXCHANGE_SUCCESS]: (state, action) => ({ exchange: action.exchange }),
        [stockConstants.GETEMOTION_SUCCESS]: (state, action) => ({ emotion: action.emotion }),
    },
    initialState
)

export const stockActions = {
    getStockData, getFinance, getRecentNews, getExchangeData, getEmotion, getExchange
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

function getFinance(stockName){
   //  alert(stockName)
    return dispatch => {
        dispatch(request(stockName))

        stockService.getFinance(stockName)
            .then(
                finance => {
                    dispatch(success(finance))
                    // console.log(finance)
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
    // alert(stockName)
    return dispatch => {
        dispatch(request(stockName))

        stockService.getRecentNews(stockName)
            .then(
                recentNews => {
                    dispatch(success(recentNews))
                    // console.log(recentNews)
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

// function getRecentNews(){
//     return dispatch => {
//         dispatch(request())

//         stockService.getRecentNews()
//             .then(
//                 recentNews => {
//                     dispatch(success(recentNews))
//                     history.push('/covid')
//                     console.log(recentNews)
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                 }
//             )
//     }

//     function request() { return { type: stockConstants.GETRECENTNEWS_REQUEST } }
//     function success(recentNews) { return { type: stockConstants.GETRECENTNEWS_SUCCESS, recentNews } }
//     function failure(error) { return { type: stockConstants.GETRECENTNEWS_FAILURE, error  } }
// }

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

function getExchange(){
    return dispatch => {
        dispatch(request())

        stockService.getExchange()
            .then(
                exchange => {
                    dispatch(success(exchange))
                    // console.log(exchangeRate)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request() { return { type: stockConstants.GETEXCHANGE_REQUEST } }
    function success(exchange) { return { type: stockConstants.GETEXCHANGE_SUCCESS, exchange } }
    function failure(error) { return { type: stockConstants.GETEXCHANGE_FAILURE, error } }
}

function getExchangeData(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getExchangeData(stockName)
            .then(
                exchangeData => {
                    dispatch(success(exchangeData))
                    console.log(exchangeData)
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request(stockName) { return { type: stockConstants.GETEXCHANGEDATA_REQUEST, stockName } }
    function success(exchangeData) { return { type: stockConstants.GETEXCHANGEDATA_SUCCESS, exchangeData } }
    function failure(error) { return { type: stockConstants.GETEXCHANGEDATA_FAILURE, error } }
}


function getEmotion(stockName){
    return dispatch => {
        dispatch(request(stockName))

        stockService.getEmotion(stockName)
            .then(
                emotion => {
                    dispatch(success(emotion))
                    // console.log(emotion)
                    history.push('/stock')
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            )
    }

    function request(stockName) { return { type: stockConstants.GETEMOTION_REQUEST, stockName } }
    function success(emotion) { return { type: stockConstants.GETEMOTION_SUCCESS, emotion } }
    function failure(error) { return { type: stockConstants.GETEMOTION_FAILURE, error } }
}

export default stockReducer