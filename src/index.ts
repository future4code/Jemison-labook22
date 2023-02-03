import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

import { userRouter } from './routes/userRouter'
import { postRouter } from './routes/postRouter'
import { friendshipRouter } from './routes/friendshipRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/friends", friendshipRouter)

