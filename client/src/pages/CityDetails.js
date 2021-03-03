import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class CityDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityId: props.match.params.cityId,
      cityDetails: {}
    }
  }

  componentDidMount() {
    this.getCityDetails()
  }

  getCityDetails = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/cities/details/${this.state.cityId}`
      )

      this.setState({ cityDetails: res.data.city })
      console.log(res.data.city)
    } catch (error) {
      throw error
    }
  }

  render() {
    console.log(this.state.cityId)
    return (
      <div>
        <h1>City details</h1>
      </div>
    )
  }
}
