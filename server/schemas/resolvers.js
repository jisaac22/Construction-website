const { AuthenticationError } = require('apollo-server-express');
const { Worker } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    workers: async () => {
      return Worker.find()
    },
    singleWorker: async (parent, {_id}) => {
      const params = _id ? { _id } : {};
      return Worker.find({_id: _id})
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Worker.findOne({ _id: context.user._id})
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addWorker: async (parent, { name, password, email, skills, phoneNumber, hourlyRate}) => {
      return Worker.create({ name, password, email, skills, phoneNumber, hourlyRate })
    },
    login: async (parent, { email, password }) => {
      const user = await Worker.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSkill: async (parent, { skills }, context) => {
      if (context.user) {
        return Worker.findOneAndUpdate(
        {_id: context.user._id},
        { $addToSet: { skills: skills } }
      )}
  }
}
};

module.exports = resolvers;