import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../style/Form.css'

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
    const { name } = this.props
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
          <button className="post" type="submit">
            Post City!
          </button>
        </form>
      </div>
    )
  }
}
