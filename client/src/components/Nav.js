import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/view/cities/">Cities</NavLink>
          <NavLink to="/view/all/listing">View All Listings</NavLink>
          <NavLink to="/post/city">Post City</NavLink>
          <NavLink to="/post/listing">Post Listing</NavLink>
        </nav>
      </header>
    )
  }
}
