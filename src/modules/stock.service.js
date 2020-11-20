import axios from 'axios'
import { context as c } from '../context'

export const stockService = {
    getStockData, getFinance, getRecentNews, getExchangeRate, getEmotion,
    // getExpPrice,
}

async function getStockData(stockName) {
    console.log('stockservice param = ' + stockName)
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/stock/stock/${stockName}`,
    }
    const resp = await axios(req)

    const data = resp.data
    console.log('sucess get stock data !')
    return data
}

async function getFinance(stockName) {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/stock/finance/${stockName}`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    console.log('sucess get stock financial info !')
    return data
}

async function getRecentNews(stockName) {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/stock/mainNews/${stockName}`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    console.log('sucess get Recent News !')
    return data
}

// async function getExpPrice() {
//     const req = {
//         method: c.get,
//         url: `http://192.168.0.24:8080/api/stock/finance`,
//         auth: c.auth
//     }
//     const resp = await axios(req)
//     const data = resp.data
//     console.log('sucess get Exp Price !')
//     return data
// }

async function getExchangeRate(stockName) {
    const req = {
        method: c.get,
        url: `http://192.168.0.10:8080/api/stock/exchange/${stockName}`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    console.log('sucess get Exchange Rate !')
    return data
}

async function getEmotion() {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/stock/emotion`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    console.log('sucess get Emotion !')
    return data
}