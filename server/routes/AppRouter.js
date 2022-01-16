const AppRouter = require('express').Router();
const UserRouter = require('./UserRouter');
const CityRouter = require('./CityRouter');
const SkistoreRouter = require('./SkistoreRouter');
AppRouter.use('/users', UserRouter);
AppRouter.use('/cities', CityRouter);
// AppRouter.use('/skistore', SkistoreRouter);
module.exports = AppRouter;
