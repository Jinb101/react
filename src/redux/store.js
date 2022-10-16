import { legacy_createStore as createStore } from 'redux'
import countReducers from './count_reducer' ;


const store = createStore(countReducers)

export default store