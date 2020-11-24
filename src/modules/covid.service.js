import axios from 'axios'
import { context as c } from '../context'

export const covidService = {
    getDecide, getStatus, getWords, getTotalLstm, getAutoLstm
    // getStockprice
}

async function getDecide() {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/status/covid`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get decided count !')
    
    return data
}

async function getStatus() {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/board/covid`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get covid status !')
    
    return data
}

async function getWords() {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/news/economy`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get economy keywords !')

    return data
}

async function getTotalLstm(stockName,date) {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/predDate/${stockName}/${date}`
    }
    const resp = await axios(req)

    const data = resp.data.datas

    console.log('sucess get Total Lstm !')

    return data
}

async function getAutoLstm(stockName) {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/pred/${stockName}`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get Auto Lstm !')

    return data
}

// async function getStockprice(stockName) {
//     const req = {
//         method: c.post,
//         url: `http://192.168.0.11:8080/api/status/arr/covid`,
//         data: {stockName}
//     }
//     const resp = await axios(req)

//     const data = resp.data

//     console.log('sucess get stock price !')
// }