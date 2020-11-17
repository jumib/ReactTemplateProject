import axios from 'axios'
import { context as c } from '../context'

export const covidService = {
    getDecide, getStatus, getWords, getTotalLstm
    // getStockprice
}

async function getDecide() {
    const req = {
        method: c.get,
        url: `http://192.168.0.24:8080/api/status/arr/covid`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get decided count !')
    
    return data
}

async function getStatus() {
    const req = {
        method: c.get,
        url: `http://192.168.0.11:8080/api/status/arr/covid`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get covid status !')
}

async function getWords() {
    const req = {
        method: c.get,
        url: `http://192.168.0.11:8080/api/status/arr/covid`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get financial keywords !')
}

async function getTotalLstm() {
    const req = {
        method: c.get,
        url: `http://192.168.0.11:8080/api/status/arr/covid`
    }
    const resp = await axios(req)

    const data = resp.data

    console.log('sucess get Total Lstm !')
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