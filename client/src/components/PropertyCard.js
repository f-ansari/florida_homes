import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class PropertyCard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  deletePost = async (e) => {
    try {
      const res = await axios.delete(
        `${BASE_URL}/properties/delete/${this.props._id}`
      )
      console.log(res, 'delete')
    } catch (error) {
      throw error
    }
  }

  // handleUndoClick = () => {
  //   const newState = this.state.deleteProperty
  //   newState.shift()
  //   this.setState({ deleteProperty: newState })
  // }

  // refreshPage = () => {
  //   location.reload()
  // }

  render() {
    const { image, street, price, onClick } = this.props
    return (
      <div className="card">
        <div onClick={onClick}>
          <div className="img-wrapper">
            <img src={image} alt="poster" />
          </div>
          <div className="info-wrapper flex-col">
            <h3>{street}</h3>
            <p>${price}</p>
          </div>
        </div>
        <button onClick={this.deletePost}>Delete</button>
      </div>
    )
  }
}
