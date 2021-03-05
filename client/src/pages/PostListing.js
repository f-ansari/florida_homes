import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../style/Form.css'

export default class PostListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      mlsNum: null
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
      <div className="form">
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
            className="input-feild"
          />
          <br></br>
          <p>Price:</p>
          <input
            type="text"
            placeholder="ex: $14000000"
            value={price}
            onChange={this.handleChange}
            name="price"
            className="input-feild"
          />
          <br></br>
          <p>Street:</p>
          <input
            type="text"
            placeholder="ex: 123 Wonderland Ln."
            value={street}
            onChange={this.handleChange}
            name="street"
            className="input-feild"
          />
          <br></br>
          <p>City:</p>
          <input
            type="text"
            placeholder="ex: Miami"
            value={city}
            onChange={this.handleChange}
            name="city"
            className="input-feild"
          />
          <br></br>
          <p>State:</p>
          <input
            type="text"
            placeholder="ex: FL"
            value={state}
            onChange={this.handleChange}
            name="state"
            className="input-feild"
          />
          <br></br>
          <p>Zip-Code:</p>
          <input
            type="text"
            placeholder="ex: 12345"
            value={zipCode}
            onChange={this.handleChange}
            name="zipCode"
            className="input-feild"
          />
          <br></br>
          <p>Bed:</p>
          <input
            type="text"
            placeholder="ex: 4"
            value={bed}
            onChange={this.handleChange}
            name="bed"
            className="input-feild"
          />
          <br></br>
          <p>Bath:</p>
          <input
            type="text"
            placeholder="ex: 3.5"
            value={bath}
            onChange={this.handleChange}
            name="bath"
            className="input-feild"
          />
          <br></br>
          <p>Sqft:</p>
          <input
            type="text"
            placeholder="ex: 3,465"
            value={sqft}
            onChange={this.handleChange}
            name="sqft"
            className="input-feild"
          />
          <br></br>
          <p>Description:</p>
          <input
            type="text"
            placeholder="ex: This is a lovely home!"
            value={description}
            onChange={this.handleChange}
            name="description"
            className="input-feild"
          />
          <br></br>
          <p>MLS Number:</p>
          <input
            type="text"
            placeholder="ex: 0000000"
            value={mlsNum}
            onChange={this.handleChange}
            name="mlsNum"
            className="input-feild"
          />
          <br></br>
          <button className="post" type="submit">
            List Property!
          </button>
        </form>
      </div>
    )
  }
}
