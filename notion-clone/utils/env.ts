
export const ENV = {
    jwtTemplate: process.env.CLERK_JWT_TEMPLATE_CODE,
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
    clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    convexPublicSiteKey: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
    convexPublicKey: process.env.NEXT_PUBLIC_CONVEX_URL,
    convexDeployment: process.env.CONVEX_DEPLOYMENT
}