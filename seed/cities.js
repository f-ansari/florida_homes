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
      population: '280,832 (2019)',
      areaCode: '407',
      elevation: '82',
      properties: [
        properties[Math.floor(Math.random() * properties.length)]._id
      ]
    },
    {
      name: 'Miami',
      cardinalDirection: 'South East',
      taxRate: '7.0',
      population: '454,279 (2019)',
      areaCode: '786',
      elevation: 'n/a',
      properties: [
        properties[Math.floor(Math.random() * properties.length)]._id
      ]
    },
    {
      name: 'Destin',
      cardinalDirection: 'North West',
      taxRate: '6.5',
      population: '13,702 (2019)',
      areaCode: '850',
      elevation: '26',
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
