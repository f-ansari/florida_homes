import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import CityCard from '../components/CityCard'

export default class ViewCities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCities: []
    }
  }

  componentDidMount() {
    this.getAllCities()
  }

  getAllCities = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/cities/all`)
      this.setState({ allCities: res.data.cities })
    } catch (error) {
      throw error
    }
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>View Cities</h1>
        </div>

        <section className="container-grid">
          {this.state.allCities.map((city, index) => (
            <CityCard
              name={city.name}
              id={city._id}
              onClick={() =>
                this.props.history.push(`/view/city/details/${city._id}`)
              }
            />
          ))}
        </section>
      </div>
    )
  }
}
