const { City } = require('../models/index')

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find()
    return res.status(200).json({ cities })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const postCity = async (req, res) => {
  try {
    const city = await new City(req.body)
    await city.save()
    return res.status(201).json({
      city
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await City.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('City deleted')
    }
    throw new Error('City not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCities,
  postCity,
  deleteCity
}
