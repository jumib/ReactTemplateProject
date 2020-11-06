import axios from 'axios'
import { context as c } from '../context'

export const stockService = {
    getStockData
}

async function getStockData(stockName) {
    const req ={
        method: c.get,
        url: `${c.url}/api/access/${stockName}`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert('sucess get stock data !')
    return data
}