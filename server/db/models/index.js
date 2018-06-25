const User = require('./user')
const Event = require('./event')

User.hasMany(Event)
Event.belongsTo(User)


module.exports = {
  User,
  Event
}
