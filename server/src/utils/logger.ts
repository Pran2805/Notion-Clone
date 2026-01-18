import pino from "pino"
import fs from "fs"
import path from "path"
import ENV from "./env.ts"

const logDir = path.resolve(process.cwd(), "logs")
const logFile = path.join(logDir, "app.log")

// Ensure log directory exists (recursive = safe for nested paths)
fs.mkdirSync(logDir, { recursive: true })

const streams: pino.StreamEntry[] = [
  { stream: process.stdout },
  {
    stream: pino.destination({
      dest: logFile,
      sync: false, // async = non-blocking
    }),
  },
]

const logger = pino(
  {
    level: ENV.logLevel || "info",
    timestamp: pino.stdTimeFunctions.isoTime,
    base: {
      pid: process.pid,
    },
  },
  pino.multistream(streams, { dedupe: true })
)

export default logger
