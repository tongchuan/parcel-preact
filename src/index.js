import "babel-polyfill";
import preact from 'preact';
import { Provider } from 'preact-redux'
import { Router, Route } from 'preact-router'
import { createBrowserHistory, browserHistory } from 'history'
// createHashHistory
import { syncHistoryWithStore, routerReducer } from 'preact-router-redux'

import store from './redux/index'
import './style/index.scss'
import './style/index.less'
// import { h, render, Component } from 'preact';
import Index from './containers/Index'
import TodoList from './components/TodoList'
import Clock from './components/Clock'
const history = syncHistoryWithStore(createBrowserHistory(), store)
// console.log(store)
preact.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}></Route>
      <Route path="/td" component={TodoList}></Route>
      <Route path="/clock" component={Clock}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
// preact.render((
//   <div id="index">
//     <Clock />
//     <TodoList />
//     <span>Hello, world!</span>
//     <button onClick={ e => alert("hi!") }>Click Me</button>
//   </div>
// ), document.body)