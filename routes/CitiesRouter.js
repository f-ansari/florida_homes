const Router = require('express').Router()
const CityController = require('../controllers/CityController')

Router.get('/all', CityController.getAllCities)

Router.get('/details/:id', CityController.getCityById)

Router.post('/add', CityController.postCity)

Router.delete('/delete/:id', CityController.deleteCity)

Router.put('/update', CityController.updateCity)

module.exports = Router
