const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.port || 5000

const app = express()

// Connecting DB
connectDB()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Error handler over ride express middleware
app.use(errorHandler)

app.listen(port, () => console.log(`Server starated on port ${port}`))