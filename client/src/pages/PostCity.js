import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../style/Form.css'

export default class PostCity extends Component {
  constructor(props) {
    super(props)

    this.capitalizeString = this.props.capitalizeString

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
    this.setState({ name: await this.capitalizeString(this.state.name) })
    e.preventDefault()
    try {
      await axios.post(`${BASE_URL}/cities/add`, this.state)
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
      <div className="form">
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
            className="input-feild"
          />
          <br></br>
          <p>Cardinal Direction:</p>
          <input
            type="text"
            placeholder="ex: North East or NE"
            value={cardinalDirection}
            onChange={this.handleChange}
            name="cardinalDirection"
            className="input-feild"
          />
          <br></br>
          <p>Tax Rate:</p>
          <input
            type="text"
            placeholder="ex: 6.5"
            value={taxRate}
            onChange={this.handleChange}
            name="taxRate"
            className="input-feild"
          />
          <br></br>
          <p>Population:</p>
          <input
            type="text"
            placeholder="12,500"
            value={population}
            onChange={this.handleChange}
            name="population"
            className="input-feild"
          />
          <br></br>
          <p>Area Code:</p>
          <input
            type="text"
            placeholder="321"
            value={areaCode}
            onChange={this.handleChange}
            name="areaCode"
            className="input-feild"
          />
          <br></br>
          <p>Elevation:</p>
          <input
            type="text"
            placeholder="ex: 35"
            value={elevation}
            onChange={this.handleChange}
            name="elevation"
            className="input-feild"
          />
          <br></br>
          <button className="post" type="submit">
            Post City!
          </button>
        </form>
      </div>
    )
  }
}
