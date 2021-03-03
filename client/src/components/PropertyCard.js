import React, { Component } from 'react'

export default class PropertyCard extends Component {
  render() {
    // console.log(this.props)
    const { image, street, price, onClick } = this.props

    return (
      <div onClick={onClick} className="card">
        <div className="img-wrapper">
          <img src={image} alt="poster" />
        </div>
        <div className="info-wrapper flex-col">
          <h3>{street}</h3>
          <p>${price}</p>
        </div>
      </div>
    )
  }
}
