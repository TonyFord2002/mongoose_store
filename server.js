require('dotenv').config()
const express = require('express')
const methodOverride= require('method-override')
const app = express()
const PORT = process.env.PORT || 3000

//connect to database
const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
})

//Initialize View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
  res.locals.data = {}
  next()
}) 

// Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')) // Allows us to override methods
app.use('/products', require('./controllers/routeController.js'))

//Redirecting to Index page
app.get('/', (req,res)=>{
    res.redirect('/products')
})

// Listen on PORT
app.listen(PORT, () => {
  console.log('Making that money on:', PORT)
})
