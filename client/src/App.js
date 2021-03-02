import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <main>
          <Switch>
            <Route />
            <Route />
            <Route />
            <Route />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
