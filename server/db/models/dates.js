const Sequelize = require('sequelize')
const db = require('../db')

const Date = db.define('date', {
  monthName: {},
  monthNumber: {},
  date: {},
  year: {},

})
