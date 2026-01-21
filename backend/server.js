import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000
import connectDB from './config/database.js'
dotenv.config()
connectDB()
const App = express()
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({
    extended:true
}))
App.get('/', (req, res) => {
    res.send('API is running....')
})
App.listen(PORT, () => {
    console.log(`server running on the port http://localhost:${PORT}`)
})