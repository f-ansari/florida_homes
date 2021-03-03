import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class ListingDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyId: props.match.params.propertyId,
      propertyDetail: {}
    }
  }

  componentDidMount() {
    this.getPropertyDetails()
  }

  getPropertyDetails = async () => {
    // const propertyId = this.props.match.params.id
    console.log(this.state.propertyId, 'id')
    try {
      console.log('above res')
      const res = await axios.get(
        `${BASE_URL}/api/properties/details/${this.state.propertyId}`
      )
      this.setState({ propertyDetail: res.data.property })
      console.log(res, 'res-axios')
    } catch (error) {
      throw error
    }
  }

  render() {
    // console.log(this.props, 'listingD')
    return (
      <div>
        <h1>Listing Details</h1>
      </div>
    )
  }
}
