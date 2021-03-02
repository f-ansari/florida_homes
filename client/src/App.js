import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ViewCities from './pages/ViewCities'
import PostListing from './pages/PostListing'
import ViewAllListing from './pages/ViewAllListing'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/view/cities/" component={ViewCities} />
            <Route path="/post/listing" component={PostListing} />
            <Route path="/view/all/listing" component={ViewAllListing} />
          </Switch>
        </main>
      </div>
    )
  }
}
