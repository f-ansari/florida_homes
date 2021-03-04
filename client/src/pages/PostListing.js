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
      bed: '',
      bath: '',
      sqft: '',
      description: '',
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
      console.log(res)
      this.props.history.push(`/view/all/listing`)
    } catch (error) {
      throw error
    }
  }

  render() {
    const {
      image,
      price,
      street,
      city,
      state,
      zipCode,
      bed,
      bath,
      sqft,
      description,
      mlsNum
    } = this.state
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
            placeholder="ex: 14,000,000"
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
          <p>Bed:</p>
          <input
            type="text"
            placeholder="ex: 4"
            value={bed}
            onChange={this.handleChange}
            name="bed"
          />
          <br></br>
          <p>Bath:</p>
          <input
            type="text"
            placeholder="ex: 3.5"
            value={bath}
            onChange={this.handleChange}
            name="bath"
          />
          <br></br>
          <p>Sqft:</p>
          <input
            type="text"
            placeholder="ex: 3,465"
            value={sqft}
            onChange={this.handleChange}
            name="sqft"
          />
          <br></br>
          <p>Description:</p>
          <input
            type="text"
            placeholder="ex: This is a lovely home!"
            value={description}
            onChange={this.handleChange}
            name="description"
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
