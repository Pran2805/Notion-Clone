import app from "./app.ts"
import ENV from "./utils/env.ts"


app.listen(ENV.port, ()=>{
    console.log(`Server is running on port ${ENV.port}`)
})