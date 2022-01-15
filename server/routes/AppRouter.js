const Router = require('express').Router();
const UserRouter = require('./UserRouter');
const CityRouter = require('./CityRouter');
const SkistoreRouter = require('./SkistoreRouter');
Router.use('/users', UserRouter);
Router.use('/city', CityRouter);
Router.use('/skistore', SkistoreRouter);
module.exports = Router;
