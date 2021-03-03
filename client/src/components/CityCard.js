import React, { Component } from 'react'

export default class CityCard extends Component {
  render() {
    const { name, onClick } = this.props
    console.log(this.props)
    return (
      <div onClick={onClick} className="card">
        <div className="info-wrapper flex-col">
          <h3>{name}</h3>
        </div>
      </div>
    )
  }
}
