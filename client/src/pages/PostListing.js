import React, { Component } from 'react'

export default class PostListing extends Component {
  render() {
    return (
      <div>
        <h1>Post Listing</h1>
        <p>
          create a form based on property model: <br />
          image: img url <br />
          price: '6,950,000',
          <br />
          street: '9236 Bay Point Dr',
          <br />
          city: 'Orlando',
          <br />
          state: 'FL',
          <br />
          zipCode: '32819',
          <br />
          bed: '6',
          <br />
          bath: '9',
          <br />
          sqft: '9,764'
          <br />
        </p>{' '}
        <br />
        <p>create listForm Component</p>
      </div>
    )
  }
}
