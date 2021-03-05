import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class CityCard extends Component {
  constructor() {
    super()

    this.state = {
      deleteCity: false
    }
  }

  deleteCityPost = async (e) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/cities/delete/${this.props.id}`
      )
      this.setState({ deleteCity: true })
      console.log(res, 'deleted city')
    } catch (error) {
      throw error
    }
  }

  render() {
    const { name, onClick } = this.props
    return (
      <section>
        {!this.state.deleteCity ? (
          <div className="card">
            <div onClick={onClick}>
              <div className="info-wrapper flex-col">
                <h3>{name}</h3>
              </div>
            </div>
            <button className="deleteBtn" onClick={this.deleteCityPost}>
              Delete
            </button>
          </div>
        ) : null}
      </section>
    )
  }
}
