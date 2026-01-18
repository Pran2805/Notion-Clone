import dotenv from 'dotenv'
dotenv.config({quiet: true})

interface env{
    port: number
    logLevel: string
    frontendURL: string
}
const ENV: env= {
    port: Number(process.env.PORT || 5000),
    logLevel: process.env.LOG_LEVEL || "info",
    frontendURL: process.env.FRONTEND_URL || "http://localhost:5173/"
}

export default ENV;