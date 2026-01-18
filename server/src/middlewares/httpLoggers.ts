import pinoHttp from "pino-http"
import logger from "../utils/logger.ts"
import type { Response } from "express"

const httpLogger: any = pinoHttp({
  logger,
  customLogLevel: (res: Response, err?: Error) => {
    if (err || res.statusCode >= 500) return "error"
    if (res.statusCode >= 400) return "warn"
    return "info"
  },
})

export default httpLogger
