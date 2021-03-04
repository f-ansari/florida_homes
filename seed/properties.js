const db = require('../db')
const { Property } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const properties = [
    {
      image:
        'https://photos.zillowstatic.com/fp/3efe398bac873b136c3fdf5a52e92853-uncropped_scaled_within_1344_1008.webp',
      price: '6,950,000',
      street: '9236 Bay Point Dr',
      city: 'Orlando',
      state: 'FL',
      zipCode: '32819',
      bed: '6',
      bath: '9',
      sqft: '9,764'
      // description: { type: String, required: true },
      // mlsNum: { type: String, required: true }
    },
    {
      image:
        'https://photos.zillowstatic.com/fp/0785863dec9b18f33da585151573efd6-uncropped_scaled_within_1344_1008.webp',
      price: '18,900,000',
      street: '580 Sabal Palm Rd',
      city: 'Miami',
      state: 'FL',
      zipCode: '33137',
      bed: '6',
      bath: '9',
      sqft: '11,485'
    },
    {
      image:
        'https://photos.zillowstatic.com/fp/6b2809c454d1bb1bd9b5112a5d57b749-uncropped_scaled_within_1344_1008.webp',
      price: '4,999,000',
      street: '4532 Fairwind Ct',
      city: 'Destin',
      state: 'FL',
      zipCode: '32541',
      bed: '4',
      bath: '6',
      sqft: '5,735'
    }
  ]

  await Property.insertMany(properties)
  console.log('Created Properties Listing!')
}

const run = async () => {
  await main()
  db.close()
}

run()
