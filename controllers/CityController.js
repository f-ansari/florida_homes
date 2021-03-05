const { City } = require('../models/index')

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find()
    return res.status(200).json({ cities })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCityById = async (req, res) => {
  try {
    const { id } = req.params
    const city = await City.findById(id).populate('properties')
    if (city) {
      return res.status(200).json({ city })
    }
    return res.status(404).send('City with specific ID does nto exist')
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

const updateCity = async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params
    await City.findByIdAndUpdate(id, req.body, { new: true }, (err, city) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!city) {
        res.status(500).send('City not found!')
      }
      return res.status(200).json(city)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllCities,
  getCityById,
  postCity,
  deleteCity,
  updateCity
}
