const { Schema, model } = require('mongoose')

const decisionSchema = new Schema (
  {
    decisionText: {
      type: String,
      minLength: 1,
      maxLength: 280
    }
  }
)

const Decision = model('Decision', decisionSchema)

module.exports = Thought