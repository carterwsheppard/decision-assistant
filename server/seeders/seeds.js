const userSeeds = require('./userSeed.json')
const db = require('../config/connection')
const { User } = require('../models')

db.once('open', async () => {
  try {
    await User.deleteMany({})
    
    await User.create(userSeeds)
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('SEEDED')
  process.exit(0)
})