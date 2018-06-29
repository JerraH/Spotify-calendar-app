const router = require('express').Router()
const {Event, User} = require('../db/models')
const db = require('../db')
const Sequelize = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll({
      where: {
        userId: req.params.user
      }
    })
    res.json(events)
    }
    catch(err) {
    next(err)
  }
})

//get events for month
router.get('/:month', (req, res, next) => {
  Event.findAll({
      where: {
        month: req.params.month,
        userId: req.body.user.id
        // userId: req.body.user.id,
      }
    })
    .then(events => res.json(events))
    .catch(next)
  })


router.post('/:userID', (req, res, next) => {
  User.findById(req.params.userId)
  .then(user =>
    user.addEvent(req.body)
    .then(event => res.json(event))
    .catch(next))
  })

