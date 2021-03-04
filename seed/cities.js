const db = require('../db')
const { City, Property } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const properties = await Property.find({})

  const cities = [
    {
      name: 'Orlando',
      cardinalDirection: 'Centeral',
      taxRate: '6.5',
      //   population: { type: String, required: true },
      // areaCode: { type: String, required: true },
      // elevation: { type: String, required: true },
      properties: [
        properties[Math.floor(Math.random() * properties.length)]._id
      ]
    },
    {
      name: 'Miami',
      cardinalDirection: 'South East',
      taxRate: '7.0',
      properties: [
        properties[Math.floor(Math.random() * properties.length)]._id
      ]
    },
    {
      name: 'Destin',
      cardinalDirection: 'North West',
      taxRate: '6.5',
      properties: [
        properties[Math.floor(Math.random() * properties.length)]._id
      ]
    }
  ]

  await City.insertMany(cities)
  console.log('Created cities with properties!')
}

const run = async () => {
  await main()
  db.close()
}

run()
