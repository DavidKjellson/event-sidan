const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')

const app = express()

app.use(cors())

let database

sqlite.open('events.sqlite')
  .then(database_ => {
    database = database_
  })

app.get('/', (request, response) => {
  database.all('SELECT * FROM events')
    .then(events => {
      database.all('SELECT * FROM CITIES')
        .then(cities => {
          response.send(cities)
        })
      const o = []

      for (i = 0; i < cities.length; i++) {

        o.push(cities)

        for (i = 0; i < events.length; i++) {

          if (events.location === cities.location) {
            o.push(events)

          }
        }

      }

      response.send(o)
      response.send(events)
      console.log(o)

    })
})

app.listen(3000)