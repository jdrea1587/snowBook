const { User } = require('../models');

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetProfiles
};
