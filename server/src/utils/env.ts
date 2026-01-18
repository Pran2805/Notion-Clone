import dotenv from 'dotenv'
dotenv.config({quiet: true})

const ENV = {
    port: process.env.PORT
}

export default ENV;