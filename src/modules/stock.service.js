import axios from 'axios'
import { context as c } from '../context'

export const stockService = {
    getStockData, getFinance
}

async function getStockData(stockName) {
    console.log('stockservice param = ' + stockName)
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/emotion/${stockName}`,
    }
    const resp = await axios(req)

    const data = resp.data
    console.log('sucess get stock data !')
    return data
}

async function getFinance() {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/finance`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    console.log('sucess get stock financial info !')
    return data
}