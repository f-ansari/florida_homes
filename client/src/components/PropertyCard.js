import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class PropertyCard extends Component {
  constructor() {
    super()

    this.state = {
      deleteListing: false
    }
  }

  deletePost = async (e) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/properties/delete/${this.props.id}`
      )
      this.setState({ deleteListing: true })
      console.log(res, 'delete')
    } catch (error) {
      throw error
    }
  }

  render() {
    const { image, street, price, onClick, createdAt } = this.props

    const timestamp = createdAt
    const date = new Date(timestamp)
    const created = date.toDateString()

    return (
      <section>
        {!this.state.deleteListing ? (
          <div className="card">
            <div onClick={onClick}>
              <div className="img-wrapper">
                <img src={image} alt="poster" />
              </div>
              <div className="info-wrapper flex-col">
                <h3>{street}</h3>
                <p>{price}</p>
                <p>Listed On: {created}</p>
              </div>
            </div>
            <button className="deleteBtn" onClick={this.deletePost}>
              Delete
            </button>
          </div>
        ) : null}
      </section>
    )
  }
}
