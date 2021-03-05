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
      console.log(res.data.city)
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
    const { name } = this.state.cityDetails
    return (
      <div>
        <h1>City details</h1>
        <h2>{name}</h2>

        <section className="container-grid">
          {this.state.propertyByCity.map((property, index) => (
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
