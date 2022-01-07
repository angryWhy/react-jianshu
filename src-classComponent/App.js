import React, { Component } from 'react'
import { GlobalStyle } from "./style";
import { IconStyle } from '../src/assets/img/iconfont/iconfont';
import Header from './common/header';
export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <IconStyle/>
        <Header/>
      </div>
    )
  }
}
