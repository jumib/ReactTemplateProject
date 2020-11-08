import axios from 'axios'
import { context as c } from '../context'

export const covidService = {
    getDecide
}

async function getDecide() {
    const req = {
        method: c.get,
        url: 'http://192.168.0.11:8080/api/status/arr/covid'
    }
    const resp = await axios(req)

    const data = resp.data

    alert('sucess get stock data !')
    
    return data
}