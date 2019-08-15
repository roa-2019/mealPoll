const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')
module.exports = router

router.get('/', (req, res) => {

  res.send('Hello mealPoll team!')
})

//--------------
//Results Page
//--------------
router.get('/results',(req, res) => {
  res.render('views/results')
})