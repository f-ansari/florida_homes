const { Schema } = require('mongoose')

const City = new Schema(
  {
    name: { type: String, required: true },
    cardinalDirection: { type: String, required: true },
    taxRate: { type: String, required: true },
    population: { type: String, required: true },
    areaCode: { type: String, required: true },
    elevation: { type: String, required: true },
    properties: [{ type: Schema.Types.ObjectId, ref: 'properties' }]
  },
  { timestamps: true }
)

module.exports = City
