const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
    name: {
        type: Sequelize.STRING
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    }
})
