"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggleColor";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    const scrolled = useScrollTop();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={cn(
            "z-50 bg-background/80 backdrop-blur-lg fixed top-0 flex items-center w-full p-4 md:p-6 transition-all duration-300",
            scrolled && "border-b shadow-lg bg-background/95"
        )}>
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:ml-auto md:justify-end justify-between w-full items-center gap-x-4">
                <ModeToggle />
                <Button variant="ghost" className="hover:bg-primary/10">
                    Login
                </Button>
                <Button className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started
                </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-x-2 ml-auto">
                <ModeToggle />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-75 sm:w-100">
                        <div className="flex flex-col gap-y-4 pt-10">
                            <Button variant="ghost" className="w-full justify-start text-lg" onClick={() => setIsOpen(false)}>
                                Login
                            </Button>
                            <Button className="w-full bg-linear-to-r from-primary to-primary/80" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}