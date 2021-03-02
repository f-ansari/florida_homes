const Router = require('express').Router()
const PropertiesRouter = require('./PropertiesRouter')
const CitiesRouter = require('./CitiesRouter')

Router.use('/properties', PropertiesRouter)

Router.use('/cities', CitiesRouter)

module.exports = Router
