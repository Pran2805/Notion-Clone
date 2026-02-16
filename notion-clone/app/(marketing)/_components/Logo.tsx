"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Brain } from "lucide-react"
import { motion } from "framer-motion"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export default function Logo() {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
            <div className="relative">
                <Brain
                    className="size-8 text-primary"
                    aria-label="logo"
                />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <p className={cn("font-bold text-xl", font.className)}>
                Think<span className="text-primary">Grid</span>
            </p>
        </motion.div>
    )
}