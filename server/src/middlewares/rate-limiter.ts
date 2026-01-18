import type { NextFunction, Request, Response } from "express"
import { RateLimiterMemory } from "rate-limiter-flexible"

const rateLimiter = new RateLimiterMemory({
  points: 20,     
  duration: 60,  
  blockDuration: 60, 
})

interface LimiterRequest extends Request{
    ip: string
}

export const rateLimiterMiddleware = (req: LimiterRequest, res: Response, next:NextFunction) => {
  rateLimiter.consume(req.ip)
    .then(() => {
      next()
    })
    .catch(() => {
      res.status(429).json({
        message: "Too many requests, slow down.",
      })
    })
}