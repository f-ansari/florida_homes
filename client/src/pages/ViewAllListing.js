import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import PropertyCard from '../components/PropertyCard'

export default class ViewAllListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProperties: []
    }
  }

  componentDidMount() {
    this.getAllProperties()
  }

  getAllProperties = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/properties/all`)
      this.setState({ allProperties: res.data.properties })
      // console.log(res.data.properties)
    } catch (error) {
      throw error
    }
  }

  render() {
    return (
      <div>
        <h1>View All Listing</h1>
        <p>
          map out all listing <br />
          click on lising take you to detials of listing
        </p>

        <section className="container-grid">
          {this.state.allProperties.map((property, index) => (
            <PropertyCard
              image={property.image}
              street={property.street}
              price={property.price}
              onClick={() =>
                this.props.history.push(`/details/${property._id}`)
              }
            />
          ))}
        </section>
      </div>
    )
  }
}
