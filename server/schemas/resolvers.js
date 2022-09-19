const { AuthenticationError } = require('apollo-server-express')
const { User, Decision } = require('../models')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findOne({ _id: context.user.id })
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
    decisions: async () => {
      return Decision.find()
    },
    decision: async(parent, { _id }) => {
      return Decision.findOne({ _id })
        .select('-__v')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)

      return user
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
      context
      return user
    }, 
    addDecision: async (parent, args, context) => {
      console.log(context)
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
  }
}

module.exports = resolvers