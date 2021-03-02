const Router = require('express').Router()
const CityController = require('../controllers/CityController')

Router.get('/all', CityController.getAllCities)

Router.post('/add', CityController.postCity)

Router.delete('/delete/:id', CityController.deleteCity)

module.exports = Router
