import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class PostListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      image: '',
      price: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      mlsNum: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/properties/add`, this.state)
      this.props.history.push(`/view/all/listing`)
    } catch (error) {
      throw error
    }
  }

  render() {
    const { image, price, street, city, state, zipCode, mlsNum } = this.state
    return (
      <div>
        <h1>Post Listing</h1>
        <p>Fill out the form to List a property live.</p>

        <form onSubmit={this.handleSubmit}>
          <p>Image URL:</p>
          <input
            type="url"
            placeholder="One Image URL"
            value={image}
            onChange={this.handleChange}
            name="image"
          />
          <br></br>
          <p>Price:</p>
          <input
            type="text"
            placeholder="ex: $14000000"
            value={price}
            onChange={this.handleChange}
            name="price"
          />
          <br></br>
          <p>Street:</p>
          <input
            type="text"
            placeholder="ex: 123 Wonderland Ln."
            value={street}
            onChange={this.handleChange}
            name="street"
          />
          <br></br>
          <p>City:</p>
          <input
            type="text"
            placeholder="ex: Miami"
            value={city}
            onChange={this.handleChange}
            name="city"
          />
          <br></br>
          <p>State:</p>
          <input
            type="text"
            placeholder="ex: FL"
            value={state}
            onChange={this.handleChange}
            name="state"
          />
          <br></br>
          <p>Zip-Code:</p>
          <input
            type="text"
            placeholder="ex: 12345"
            value={zipCode}
            onChange={this.handleChange}
            name="zipCode"
          />
          <br></br>
          <p>MLS Number:</p>
          <input
            type="text"
            placeholder="ex: 0000000"
            value={mlsNum}
            onChange={this.handleChange}
            name="mlsNum"
          />
          <br></br>
          <button type="submit">List Property!</button>
        </form>
      </div>
    )
  }
}
