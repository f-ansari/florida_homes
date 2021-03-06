import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import PropertyCard from '../components/PropertyCard'

export default class CityDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityId: props.match.params.cityId,
      cityDetails: {},
      propertyByCity: []
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
      this.getPropertiesByCity()
    } catch (error) {
      throw error
    }
  }

  getPropertiesByCity = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/properties/sort/${this.state.cityDetails.name}`
      )
      this.setState({ propertyByCity: res.data.list })
    } catch (error) {
      throw error
    }
  }

  render() {
    const propertyByCity = this.state.propertyByCity.reverse()
    const {
      name,
      cardinalDirection,
      taxRate,
      population,
      areaCode,
      elevation
    } = this.state.cityDetails
    return (
      <div>
        <div className="title">
          <h1>City details</h1>
          <h2>{name}</h2>
        </div>
        <div className="card city-stats">
          <h2>City Stats</h2>
          <h4>Cardinal Direction: {cardinalDirection}</h4>
          <h4>Tax Rate: {taxRate}%</h4>
          <h4>Population: {population}</h4>
          <h4>Area Code: {areaCode}</h4>
          <h4>Elevation: {elevation}'</h4>
        </div>

        <section className="container-grid">
          {propertyByCity.map((property, index) => (
            <PropertyCard
              image={property.image}
              street={property.street}
              price={property.price}
              createdAt={property.createdAt}
              id={property._id}
              onClick={() =>
                this.props.history.push(`/view/listing/details/${property._id}`)
              }
            />
          ))}
        </section>
      </div>
    )
  }
}
