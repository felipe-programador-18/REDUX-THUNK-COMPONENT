import React, {Component} from 'react'
import './App.css';
import { Provider } from 'react-redux' ;
import thunk from 'redux-thunk'
import {Logger} from 'redux-logger'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducers/index'
import Info from './Info';
import OtherThing from './OtherThing';

//create all store!!!
const store = configureStore({
  reducer, applyMiddleware:[thunk, Logger]
})


class App extends Component {
  render(){
  return ( 
    <Provider store={store}>
    <div className="App">
      <h1>Practice little bit about redux!!</h1>
    </div>
    <Info/>
    <OtherThing/>
    </Provider>
  );

  }}

export default App;
