"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "@/components/toggleColor";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { Loader } from "@/components/Loader";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={cn(
            "z-50 bg-background/80 backdrop-blur-lg fixed top-0 flex items-center w-full p-4 md:p-6 transition-all duration-300",
            scrolled && "border-b shadow-lg bg-background/95"
        )}>
            <Logo />

            <div className="hidden md:flex md:ml-auto md:justify-end justify-between w-full items-center gap-x-4">
                <ModeToggle />

                {isLoading ? (
                    <div className="flex items-center gap-x-2">
                        <Loader />
                    </div>
                ) : isAuthenticated ? (
                    <>
                        <Button variant="ghost" className="hover:bg-primary/10" asChild>
                            <Link href="/documents">
                                Enter ThinkGrid
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: "size-8"
                                }
                            }}
                        />
                    </>
                ) : (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" className="hover:bg-primary/10">
                                Login
                            </Button>
                        </SignInButton>

                        <SignInButton mode="modal">
                            <Button className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                                Get Started
                            </Button>
                        </SignInButton>
                    </>
                )}
            </div>

            <div className="md:hidden flex items-center gap-x-2 ml-auto">
                <ModeToggle />

                {isLoading ? (
                    <Loader />
                ) : (
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-75 sm:w-100">
                            <div className="flex flex-col gap-y-6 pt-10">
                                {isAuthenticated ? (
                                    <>
                                        <div className="flex items-center gap-x-3 px-3 py-2 bg-muted/50 rounded-lg">
                                            <UserButton afterSignOutUrl="/" />
                                            <span className="text-sm font-medium">Account</span>
                                        </div>
                                        <Button
                                            className="w-full bg-linear-to-r from-primary to-primary/80"
                                            onClick={() => setIsOpen(false)}
                                            asChild
                                        >
                                            <Link href="/documents">
                                                Enter ThinkGrid
                                            </Link>
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <SignInButton mode="modal">
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-lg hover:bg-primary/10"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Login
                                            </Button>
                                        </SignInButton>

                                        <SignInButton mode="modal">
                                            <Button
                                                className="w-full bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Get Started
                                            </Button>
                                        </SignInButton>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                )}
            </div>
        </nav>
    )
}