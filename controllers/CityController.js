const { City } = require('../models');

const getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    return res.status(200).json({ cities });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCityById = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findByPk(id);
    if (city) {
      return res.status(200).json({ city });
    }
    return res.status(404).send('This city does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createCity = async (req, res) => {
  try {
    const newCity = await City.create(req.body);
    await newCity.save();
    return res.status(200).json({ newCity });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCity = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const updatedCity = await City.update({ where: { id: req.params.id } });
    if (updatedCity) {
      return res.status(200).send('City Updated');
    }
    throw new Error('City not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCity = async (req, res) => {
  try {
    const deleted = await City.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(200).send('City removed');
    }
    throw new Error('City not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCities,
  getCityById,
  deleteCity,
  updateCity,
  createCity
};
