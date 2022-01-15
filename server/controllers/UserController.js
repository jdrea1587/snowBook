const { User } = require('../models');

//users

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
  try {
    const { user_id } = req.params;
    await User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err) {
        // res.status(500).send(err);
      }
      if (!user) {
        // res.status(500).send('User not found');
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
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
