const { model } = require('mongoose')
const CitySchema = require('./city')
const PropertySchema = require('./property')

const City = model('cities', CitySchema)
const Property = model('properties', PropertySchema)

module.exports = {
  City,
  Property
}
