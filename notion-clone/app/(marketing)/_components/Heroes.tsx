"use client"

import { motion } from "framer-motion"
import { Users, FileText, CheckSquare, MessageSquare } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Rich Documents",
    description: "Create and edit documents with powerful formatting"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together in real-time with your team"
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    description: "Track and manage tasks efficiently"
  },
  {
    icon: MessageSquare,
    title: "Team Communication",
    description: "Stay connected with built-in messaging"
  }
]

export default function Heroes() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="group relative p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}