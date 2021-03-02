const { Property } = require('../models/index')

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find()
    return res.status(200).json({ properties })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getPropertiesByCity = async (req, res) => {
  try {
    console.log(req.params, 'req.params')
    const {city} = req.params
    const list = await Property.find({ city: { $eq: city } })
    return res.status(200).json({ list })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postProperty = async (req, res) => {
  try {
    const property = await new Property(req.body)
    await property.save()
    return res.status(201).json({
      property
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Property.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Lisitng deleted.')
    }
    throw new Error('Lisiting not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllProperties,
  postProperty,
  deleteProperty,
  getPropertiesByCity
}
