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
  } catch (err) {
    next(err)
  }
})

//get events for month
router.get('/:month/:userId', (req, res, next) => {
  Event.findAll({
    where: {
      month: req.params.month,
      userId: req.params.userId
      // userId: req.body.user.id,
    }
  })
    .then(events => res.json(events))
    .catch(next)
})

router.post('/:userId', (req, res, next) => {
  User.findById(req.params.userId).then(user =>
    user
      .createEvent(req.body)
      .then(event => res.json(event))
      .catch(next)
  )
})

router.delete('/id/:eventId', (req, res, next) => {
  Event.destroy({
    where: {
      id: req.params.eventId}})
  .then(event => res.json(event))
  .catch(next)
})
