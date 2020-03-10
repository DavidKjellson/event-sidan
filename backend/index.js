const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')

const app = express()

app.use(cors())

let database

app.listen(3000)