const { UserModel } = require('../../models');

const UserController = {
  create: async (data) => {
    const { name, email } = data;

    const result = await UserModel.create({ name, email }).select(['-__v']);

    return result;
  },
  find: async (searchParameters = {}) => {
    const results = await UserModel.find(searchParameters).select(['-__v']);
  
    return results;
  },
  findById: async (id) => {
    const result = await UserModel.findById(id).select(['-__v']);

    return result;
  },
};

module.exports = { UserController };

