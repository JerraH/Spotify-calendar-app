const Sequelize = require('sequelize')
const db = require('../db')
require('datejs')
var moment = require('moment')
moment().format()

const Event = db.define(
  'event',
  {
    name: {
      type: Sequelize.STRING
    },
    startDate: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    endDate: {
      type: Sequelize.INTEGER,
    },
    startTime: {
      type: Sequelize.TIME
    },
    endTime: {
      type: Sequelize.TIME,
    },
    month: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  },
)

module.exports = Event
