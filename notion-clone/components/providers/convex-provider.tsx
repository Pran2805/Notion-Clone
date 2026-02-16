"use client"

import { ReactNode } from "react"
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ENV } from "@/utils/env"
const convex = new ConvexReactClient(ENV.convexPublicKey!)

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider
            publishableKey={ENV.clerkPublishableKey!}>
            <ConvexProviderWithClerk
                useAuth={useAuth}
                client={convex}
            >
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}
