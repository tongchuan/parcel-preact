import { createStore } from 'redux';
import reducers from './reducers/index';
import initStore from './initStore';
import middleware from './middleware/index'
const store = createStore(reducers,initStore, middleware)
// console.log(store)
export default store;