const { skiStore } = require('../models');

const getAllSkistores = async (req, res) => {
  try {
    const skistores = await skiStore.findAll();
    return res.status(200).json({ skistores });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getSkistoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const skistore = await skiStore.findByPk(id);
    if (skistore) {
      return res.status(200).json({ skistore });
    }
    return res.status(404).send('This skistore does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createSkistore = async (req, res) => {
  try {
    const newSkistore = await skiStore.create(req.body);
    await newSkistore.save();
    return res.status(200).json({ newSkistore });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateSkistore = async (req, res, next) => {
  try {
    // const { id } = req.params;
    const updatedSkistore = await skiStore.update({ where: { id: req.params.id } });
    if (updatedSkistore) {
      return res.status(200).send('Skistore Updated');
    }
    throw new Error('City not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteSkistore = async (req, res) => {
  try {
    const deleted = await skiStore.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(200).send('Skistore removed');
    }
    throw new Error('Skistore not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
    getAllSkistores,
    getSkistoreById,
    createSkistore,
    updateSkistore,
    deleteSkistore
};