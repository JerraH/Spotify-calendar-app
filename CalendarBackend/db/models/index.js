const Event = require ('./Event')
const User = require('./User')

const db = require('../db')

User.hasMany(Event)
Event.belongsTo(User)

module.exports = {
  User,
  Event
}
