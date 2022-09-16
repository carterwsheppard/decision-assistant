const userSeeds = require('./userSeed.json')
const decisionSeeds = require('./decisionSeeds.json')
const db = require('../config/connection')
const { User, Decision } = require('../models')

db.once('open', async () => {
  try {
    await User.deleteMany({})
    await Decision.deleteMany({})
    
    await User.create(userSeeds)

    for (let i = 0; i < decisionSeeds.length; i++) {
      const { _id, decisionAuthor } = await Decision.create(decisionSeeds[i])
      const user = await User.findOneAndUpdate(
        { username: decisionAuthor },
        { $addToSet: {
          decisions: _id
          }
        }
      )
    }
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('SEEDED')
  process.exit(0)
})