import express, { urlencoded } from 'express'
import httpLogger from './middlewares/httpLoggers.ts';
import cors from 'cors'
import morgan from 'morgan';
import helmet from 'helmet'
import ENV from './utils/env.ts';

const app = express()

app.use(cors({
    origin: [ENV.frontendURL],
    credentials: true
}))
app.use(httpLogger)
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(helmet())
app.use(morgan('combined'))


export default app;