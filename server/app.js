if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})