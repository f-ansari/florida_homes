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
        <h1>View Cities</h1>
        <br />
        <p>
          get all cities <br />
          have them click to a city and display stats <br />
          have all listings in city displayed
          <br />
          click on lising take you to detials of listing
        </p>

        <section className="container-grid">
          {this.state.allCities.map((city, index) => (
            <CityCard
              name={city.name}
              onClick={() => this.props.history.push(`/detials/${city._id}`)}
            />
          ))}
        </section>
      </div>
    )
  }
}
