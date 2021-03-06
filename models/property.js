const { Schema } = require('mongoose')

const Property = new Schema(
  {
    image: { type: String, required: false },
    price: { type: String, required: false },
    street: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zipCode: { type: String, required: false },
    bed: { type: String, required: false },
    bath: { type: String, required: false },
    sqft: { type: String, required: false },
    description: { type: String, required: false },
    mlsNum: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Property
