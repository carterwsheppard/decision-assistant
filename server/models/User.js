const { Schema, model } = require ('mongoose')

const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true
    },
    decisions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Decision'
      }
    ]
  }
)

userSchema.methods.isCorrectPassword = async function(password) {
  if(password != this.password) {
    return false
  }

  return true
}

const User = model('User', userSchema)

module.exports = User