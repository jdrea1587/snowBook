const { User } = require('../models');

const getAllProfiles = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await User.findByPk(id);
    if (userProfile) {
      return res.status(200).json({ userProfile });
    }
    return res.status(404).send('This user does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createProfile = async (req, res) => {
  try {
    const profile = await User.create(req.body);
    await profile.save();
    return res.status(200).json({ profile });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res, next) => {
  console.log(typeof req.params.id);
  try {
    let id = parseInt(req.params.id);
    const updatedProfile = await User.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(updatedProfile);
  } catch (error) {
    throw error;
  }
};

const deleteProfile = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(200).send('Profile removed');
    }
    throw new Error('Profile not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllProfiles,
  getUserProfileById,
  deleteProfile,
  updateProfile,
  createProfile
};