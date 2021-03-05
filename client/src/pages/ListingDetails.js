import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class ListingDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyId: props.match.params.propertyId,
      propertyDetails: {}
    }
  }

  componentDidMount() {
    this.getPropertyDetails()
  }

  getPropertyDetails = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/properties/details/${this.state.propertyId}`
      )
      this.setState({ propertyDetails: res.data.property })
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
    } = this.state.propertyDetails
    return (
      <div>
        <h1>Listing Details</h1>
        <section image-container className="image-container">
          <div>
            <img src={image} alt="poster" />
          </div>
        </section>

        <section className="details">
          <div className="flex-row space"></div>
          <div>
            <h1>{price}</h1>
          </div>

          <div>
            <h3>{street}</h3>
            <h4>
              {city}, {state}, {zipCode}
            </h4>
          </div>

          <div>
            <h4>Bed: {bed}</h4>
            <h4>Bath: {bath}</h4>
            <h4>Sqft: {sqft}</h4>
            <h4>Description: </h4>
            <h5>{description}</h5>
            <h4>MLS #: {mlsNum}</h4>
          </div>
        </section>
      </div>
    )
  }
}
