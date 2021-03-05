const db = require('../db')
const { City, Property } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const properties = await Property.find({})

  const cities = []

  await City.insertMany(cities)
  console.log('Created cities with properties!')
}

const run = async () => {
  await main()
  db.close()
}

run()
