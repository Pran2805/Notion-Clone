"use client"

import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="border-t border-border/40 bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          
          <div className="flex items-center gap-x-6 text-muted-foreground">
            <Button variant="ghost" size="sm" className="hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              Terms & Conditions
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              Contact
            </Button>
          </div>

          <div className="flex items-center gap-x-3">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-8 pt-4 border-t border-border/40">
          © {new Date().getFullYear()} ThinkGrid. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}