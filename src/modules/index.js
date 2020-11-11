import userReducer  from './user.action'
import covidReducer from './covid.action'
import stockReducer from './stock.action'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    userReducer, covidReducer, stockReducer
})

export default rootReducer