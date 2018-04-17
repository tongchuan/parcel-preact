import { combineReducers } from 'redux';
import { routerReducer } from 'preact-router-redux';
import reduxTest from './reduxTest';
export default combineReducers({
  testState: reduxTest,
  routing: routerReducer
})

