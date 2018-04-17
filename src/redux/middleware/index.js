import { compose, applyMiddleware } from 'redux';
function log(midd){
  return function(next) {
    return function(action) {
      // console.log(midd,next, action)
      return next(action)
    }
  }
}
function THUNK(args) {
  return function({dispatch, getState}) {
    return function(next) {
      return function(action) {
        if(typeof action === 'function') {
          return action(dispatch, getState, args);
        }
        return next(action)
      }
    }
  }
}
let thunk = THUNK()

export default compose(
  applyMiddleware(log,thunk)
)
