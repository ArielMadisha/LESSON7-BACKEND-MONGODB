const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./Utils/db')
const userRouter = require('./Routes/usersRoutes')

dotenv.config()

const app = express()
app.use(express.json())
connectDB()


app.use('/users', userRouter)

app.listen(3000, () => console.log("Server running on http://localhost:3000"))