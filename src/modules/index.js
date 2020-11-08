import userReducer  from './user.action'
import covidReducer from './covid.action'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    userReducer, covidReducer
})

export default rootReducer