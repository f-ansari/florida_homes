const { Schema } = require('mongoose')

const City = new Schema(
  {
    name: { type: String, required: false },
    cardinalDirection: { type: String, required: false },
    taxRate: { type: String, required: false },
    population: { type: String, required: false },
    areaCode: { type: String, required: false },
    elevation: { type: String, required: false },
    properties: [{ type: Schema.Types.ObjectId, ref: 'properties' }]
  },
  { timestamps: true }
)

module.exports = City
