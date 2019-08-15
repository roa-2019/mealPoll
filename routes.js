const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')
module.exports = router

router.get('/', (req, res) => {

  res.send('Hello mealPoll team!')
})


router.get('/poll', (req, res) => {

  res.render('poll', data)
})

router.post('/poll', (req,res) => {
  res.render('results', data)
})


//--------------
//Results Page
//--------------
router.get('/results',(req, res) => {

  res.render('results', data)
})