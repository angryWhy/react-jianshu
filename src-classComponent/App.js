import React, { Component } from 'react'
import { GlobalStyle } from "./style";
import { IconStyle } from '../src/assets/img/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './全局store';
import Header from './common/header';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <IconStyle/>
        <Header/>
      </Provider>
    )
  }
}
