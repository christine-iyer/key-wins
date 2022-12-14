require('dotenv').config()
// Require modules
const express = require('express')

const methodOverride = require('method-override')
const db = require('./models/db')
// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use((req,res, next) => {
  res.locals.data = {}
  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine

/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))
app.use(express.static('public'))

app.use('/wins', require('./controllers/routeController'))

/* END Middleware */

// Mount Routes


// app.listen(process.env.PORT || 3000, () => {
//      console.log('Listening on Port 3000')
//  })
 // in your code
 const PORT = process.env.PORT || 8000


// at the bottom
app.listen(PORT, () => {
  console.log('We in the building', PORT)
}) 