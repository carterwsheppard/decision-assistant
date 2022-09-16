const { Schema, model } = require('mongoose')

const decisionSchema = new Schema (
  {
    decisionText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    }
  }
)

const Decision = model('Decision', decisionSchema)

module.exports = Decision