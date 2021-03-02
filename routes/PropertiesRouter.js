const Router = require('express').Router()
const PropertyController = require('../controllers/PropertyController')

Router.get('/all', PropertyController.getAllProperties)

Router.get('/sort/:city', PropertyController.getPropertiesByCity)

Router.post('/add', PropertyController.postProperty)

Router.delete('/delete/:id', PropertyController.deleteProperty)

module.exports = Router
