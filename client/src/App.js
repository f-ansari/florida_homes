import React, { Component } from 'react'
import './style/App.css'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import ViewCities from './pages/ViewCities'
import PostListing from './pages/PostListing'
import ViewAllListing from './pages/ViewAllListing'
import ListingDetails from './pages/ListingDetails'
import CityDetails from './pages/CityDetails'
import PostCity from './pages/PostCity'

export default class App extends Component {
  capitalizeString = (string) => {
    const cityName = string
    const capCity = cityName.split(' ')

    console.log('before: ', cityName)
    string = capCity
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1).toLowerCase()
      })
      .join(' ')

    console.log('after: ', string)
    return string
  }

  render() {
    return (
      <div className="App">
        <Nav />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/view/cities" component={ViewCities} />
            <Route
              path="/post/city"
              component={(routerProps) => (
                <PostCity
                  {...routerProps}
                  capitalizeString={this.capitalizeString}
                />
              )}
            />
            <Route
              path="/post/listing"
              component={(routerProps) => (
                <PostListing
                  {...routerProps}
                  capitalizeString={this.capitalizeString}
                />
              )}
            />
            <Route path="/view/all/listing" component={ViewAllListing} />
            <Route
              path="/view/listing/details/:propertyId"
              component={ListingDetails}
            />
            <Route path="/view/city/details/:cityId" component={CityDetails} />
          </Switch>
        </main>
      </div>
    )
  }
}
