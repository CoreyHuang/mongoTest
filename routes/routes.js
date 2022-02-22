const router = require('express').Router()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

const Todo = require('../models/test')

router.get('/', (req, res) => {
  Todo.find({name: 'name-5'})
  .then((data) => { 
    console.log(data)
    res.render('show')
  })
  .catch(err => console.log(err))

 
})

module.exports = router