import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

// 引入页面
import Edit from './views/Edit'
import List from './views/List'

export default class routes extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Route path="/edit" exact component={Edit}></Route>
          <Route path="/edit/:id" exact component={Edit}></Route>
          <Route path="/" exact component={List}></Route>
        </HashRouter>
      </div>
    )
  }
}
