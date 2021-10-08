const { AuthenticationError } = require('apollo-server-express');
const { Worker } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    workers: async () => {
      return Worker.find()
    },
    user: async (parent, {workerId}) => {
      return Worker.findOne({_id: workerId})
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Worker.findOne({ _id: context.user._id})
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addWorker: async (parent, { name, username, password, email, skills, phoneNumber}) => {
      return Worker.create({ name, username, password, email, skills, phoneNumber })
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