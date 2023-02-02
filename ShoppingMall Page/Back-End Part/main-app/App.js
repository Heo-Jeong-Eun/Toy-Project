import express from 'express'
import { userRouter } from './src/routes/user-routes.js'

const mongoose = require("mongoose");

const MONGODB_URL = `mongodb+srv://heehan:heehan@11team.pwqjts6.mongodb.net/?retryWrites=true&w=majority`;

const app = express()
const PORT = 8080;

// mongoose.connect("mongodb://localhost:27017/11Team");
mongoose.connect("mongodb://localhost:8080");

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/", userRouter)

app.listen(PORT, () => {
    console.log(`server is listening at localhost:${PORT}`)
})

// origin code
// import express from 'express'
// import { userRouter } from './src/routes/user-routes.js'

// const app = express()
// const PORT = 8080;

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

// app.use("/", userRouter)

// app.listen(PORT, () => {
//     console.log(`server is listening at localhost:${PORT}`)
// })