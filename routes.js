const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')
module.exports = router

router.get('/', (req, res) => {

  res.send('Hello mealPoll team!')
})

<<<<<<< HEAD
router.get('/poll', (req, res) => {

  res.render('poll', data)
})

router.post('/poll', (req,res) => {

=======
//--------------
//Results Page
//--------------
router.get('/results',(req, res) => {
>>>>>>> 0881b117c4a465d44cf4ffba0071df976b6fbd20
  res.render('results', data)
})