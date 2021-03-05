import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class PostCity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      cardinalDirection: '',
      taxRate: '',
      population: '',
      areaCode: '',
      elevation: ''
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
      const res = await axios.post(`${BASE_URL}/cities/add`, this.state)
      this.props.history.push(`/view/cities`)
    } catch (error) {
      throw error
    }
  }

  render() {
    const {
      name,
      cardinalDirection,
      taxRate,
      population,
      areaCode,
      elevation
    } = this.props
    return (
      <div>
        <h1>Post a City:</h1>
        <p>Fill out form to list City!</p>

        <form onSubmit={this.handleSubmit}>
          <p>City Name:</p>
          <input
            type="text"
            placeholder="Insert City Name"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
          <br></br>
          <p>Cardinal Direction:</p>
          <input
            type="text"
            placeholder="ex: SE or South East"
            value={cardinalDirection}
            onChange={this.handleChange}
            name="cardinalDirection"
          />
          <br></br>
          <p>Tax rate:</p>
          <input
            type="text"
            placeholder="ex: 6.5"
            value={taxRate}
            onChange={this.handleChange}
            name="taxRate"
          />
          <br></br>
          <p>Population:</p>
          <input
            type="text"
            placeholder="ex: 12,000"
            value={population}
            onChange={this.handleChange}
            name="population"
          />
          <br></br>
          <p>Area Code:</p>
          <input
            type="text"
            placeholder="ex: 321"
            value={areaCode}
            onChange={this.handleChange}
            name="areaCode"
          />
          <br></br>
          <p>Elevation:</p>
          <input
            type="text"
            placeholder="ex: 81"
            value={elevation}
            onChange={this.handleChange}
            name="elevation"
          />
          <br></br>
          <button type="submit">List Property!</button>
        </form>
      </div>
    )
  }
}
