import React, { Component } from 'react'
import '../style/Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <div className="title-home">
          <h1>FloridaHomes🍊</h1>
        </div>

        <div className="welcome">
          <h2>Welcome to FloridaHomes</h2>
          <p>Find your dream home today with one simple click!</p>
        </div>

        <div className="about">
          <h2>About</h2>
          <p>
            FloridaHomes is a website where users can view and post their
            <br />
            listing of a property! If they are no longer in need of the <br />
            listing, they may delete it from the "View All Listing" page.
            <br />
            Or after clicking a city of their choice on the "View Cities"
            <br />
            page!
          </p>
        </div>

        <div className="warning">
          <h2>⚠️ ATTENTION ⚠️</h2>
          <p>
            This website was built as a project for a class. <br />
            The creator will try to monitor this website to the best of <br />
            their ability. If there is unusual activity such as fraud, <br />
            please be kind to delete the undesired listing. Please <br />
            use this site appropriately. <br />
          </p>
        </div>

        <div className="creator"></div>
      </div>
    )
  }
}
