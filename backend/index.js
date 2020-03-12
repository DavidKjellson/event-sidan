const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')
const nodeFetch = require('node-fetch')

const app = express()

app.use(cors())

let database



sqlite.open('events.sqlite')
  .then(database_ => {
    database = database_
  })

// =============VÄDER====================

app.get('/weather', (request, response) => {
  nodeFetch('https://www.metaweather.com/api/location/890869')
    .then(response => response.json())
    .then(w => {
      response.send(w)
    })
})

// ===========================================

app.get('/', (request, response) => {
  database.all('SELECT * FROM events')
    .then(events => {
      database.all('SELECT * FROM cities')
        .then(cities => {
          const o = {}

          cities.forEach(city => {
            if (o[city.location]) {
              city.events = []
              o[city.location] = city
            } else {
              city.events = []
              o[city.location] = city
            }
          })

          events.forEach(event => {
            if (o[event.location]) {
              o[event.location].events.push(event)
              // o[event.location].push(event)
            } else {
              o[event.location].events.push(event)
              // o[event.location] = [event]
            }
          });

          console.log(o)
          response.send(o)
        })
    })

})

app.listen(3000)