// mongoose.connect('mongodb://[account]:[password]@[db ip]:[port]/[database name]')

const mongoose = require('mongoose')
const Todo = require('../test') // 載入 todo model
mongoose.connect('mongodb://localhost/test')
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < 10; i++) {
    Todo.create({ name: 'name-' + i })
  }
  console.log('done')
})
