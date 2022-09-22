const { AuthenticationError } = require('apollo-server-express')

const { User, Decision } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        return userData
      }
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    decisions: async (parent, { username }) => {
      const params = username ? { username } : {}
      return Decision.find(params)
    },
    decision: async(parent, { _id }) => {
      return Decision.findOne({ _id })
        .select('-__v')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    }, 
    deleteAllUsers: async (parent, args) => {
      return User.deleteMany()
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if(!user) {
        throw new AuthenticationError("incorrect email or password")
      }

      const correctPw = await user.isCorrectPassword(password) 

      if(!correctPw) {
        throw new AuthenticationError("incorrect email or password") 
      }
      
      const token = signToken(user)
      return { user, token }
    }, 
    addDecision: async (parent, args, context) => {
      console.log(context.user)
      if(context.user) {
        const decision = await Decision.create({
          ...args,
          username: context.user.username
        })

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { decisions: decision.id } },
          { new: true }
        )

        return decision
      }
      else {
        console.log('no user context')
      }

      throw new AuthenticationError('you need to be logged in')
    },
    updateDecision: async (parent, { _id, decisionText }, context) => {
      const decision = await Decision.findOneAndUpdate(
        { _id: _id},
        { decisionText: decisionText },
        { new: true }
      )

      return decision
    },
    deleteDecision: async (parent, { _id }, context) => {
      return Decision.findOneAndDelete(
        { _id: _id }
      )
    },
    deleteAllDecisions: async (parent, args, context) => {
      return Decision.deleteMany()
    }
  }
}

module.exports = resolvers