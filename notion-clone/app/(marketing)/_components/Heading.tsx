"use client"
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Heading() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl space-y-6 px-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-primary">Your Connected Workspace</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
        Your Ideas, Documents, & Plans.{' '}
        <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Unified.
        </span>
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
        Welcome to <span className="font-bold text-foreground">ThinkGrid</span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        The connected workspace where better, faster work happens. 
        Collaborate seamlessly with your team in real-time.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Button size="lg" className="group relative overflow-hidden">
          <span className="relative z-10 flex items-center">
            Enter ThinkGrid 
            <ArrowRight className='size-4 ml-2 group-hover:translate-x-1 transition-transform' />
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
        
        <Button size="lg" variant="outline" className="group">
          Watch Demo
          <ArrowRight className='size-4 ml-2 group-hover:translate-x-1 transition-transform' />
        </Button>
      </div>
    </motion.div>
  )
}