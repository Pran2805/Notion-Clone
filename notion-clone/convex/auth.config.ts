import {ENV} from '../utils/env'

export default {
    providers: [
        {
            domain: ENV.jwtTemplate,
            applicationID: "convex"
        }
    ]
}