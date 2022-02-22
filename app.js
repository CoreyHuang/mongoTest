const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


// app.use('/', (req, res) => {
//   res.render('show')
//   next()
// })
require('./routes/index')(app)

app.listen(port, () => {
  console.log('server is enable...')
})