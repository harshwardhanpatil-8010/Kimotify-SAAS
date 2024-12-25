import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/api/payment(.*)',
    '/callback(.*)',
    '/api/webhook/instagram', // Add your API route here if protected
]);

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        await auth.protect();
    }
});

export const config = {
  
    matcher: [
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      '/(api|trpc)(?!/webhook/instagram).*', // Exclude the webhook route from Clerk
    ],

};
