const router = require('express').Router()
const {Event} = require('../db/models')
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

//get events on day
router.get('/:month', (req, res, next) => {
  Event.findAll({
      where: {
        month: req.params.month
        // userId: req.body.user.id,
      }
    })
    .then(events => res.json(events))
    .catch(next)
  })


router.post('/', async (req, res, next) => {
  try {
    const event = await Event.create(req.body)
    res.json(event)
  }
  catch (err) {
    next (err)
  }
})
