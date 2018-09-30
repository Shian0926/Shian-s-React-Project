import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/scss/bootstrap-custom.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

// reducers可以一次匯入用解構的組合
import * as reducers from './reducers'

// 注意: 要一個一個匯入，因為是各自獨立不同的函式傳入參數
// import { fetchItems, addItem, updateItem } from './middlewares'

import Demo from './Components/Demo'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// @reducer
//
// 這裡作合併reducer的動作
// const reducer = combineReducers({
//    searchedKeyword, filterOut, sortType, items
// })
const reducer = combineReducers({
   ...reducers
})

// @store
//
// 使用redux dev tools
// 如果要正常使用是使用 const store = createStore(reducer, applyMiddleware())
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className='main bg-gray'>
        <Navbar />
        <div className='main-content container'>
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Demo} />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)