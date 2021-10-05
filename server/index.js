const express = require('express')

const cors = require('cors')
const app = express()
const config = require('config')
const menu = require('./router/menu_router')

const PORT = process.env.PORT || config.get('port')

app.use(express.json())
app.use(express.static('uploads'))
app.use(express.static('static'))
app.use(cors())
app.use('/menu', menu)

app.get('/', (req, res) => {
  res.status(200).end()
})

app.listen(PORT, () => {
  console.log(`Server start on ${PORT} port`)
})
