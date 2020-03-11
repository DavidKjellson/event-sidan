const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')

const app = express()

app.use(cors())

let database
const o = {}


sqlite.open('events.sqlite')
  .then(database_ => {
    database = database_
  })

app.get('/', (request, response) => {
  database.all('SELECT * FROM events')
    .then(events => {
      database.all('SELECT * FROM cities')
        .then(cities => {

          events.forEach(event => {
            if (o[event.location]) {
              o[event.location].push(event)
            } else {
              o[event.location] = [event]
            }
          });
          cities.forEach(city => {
            if (o[city.location]) {
              o[city.location].push(city)
            } else {
              o[city.location] = [city]
            }
            console.log(o)
            response.send(o)
          })
        })
    })
})

app.listen(3000)