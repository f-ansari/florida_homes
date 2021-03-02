const Router = require('express').Router()
const CityController = require('../controllers/CityController')

Router.get('/all', CityController.getAllCities)

Router.post('/add', CityController.postCity)

module.exports = Router