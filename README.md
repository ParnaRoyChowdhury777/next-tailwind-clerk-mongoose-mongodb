This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.









# Steps to follow ::

1. To create a Next.js application, open the terminal and type
   bun create next-app <app_name>
Would you like to use TypeScript? No / Yes  (yes)
Would you like to use ESLint? No / Yes   (yes)
Would you like to use Tailwind CSS? No / Yes   (yes)
Would you like your code inside a `src/` directory? No / Yes   (yes)
Would you like to use App Router? (recommended) No / Yes   (yes)
Would you like to use Turbopack for `next dev`?  No / Yes   (no)
Would you like to customize the import alias (`@/*` by default)? No / Yes   (yes)
What import alias would you like configured? @/*  (press enter)

2. To set up Clerk

a) First create a new application in Clerk and then type the following in the terminal::
b) bun install @clerk/nextjs
c) set up your env variables...write these 2 lines NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZmlybS1yb2Jpbi0zLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_jgrnva9YCmP4HbrBhVmuMPE12eMXp1YqykxICTszhJ

d) create a middleware.ts file in the src/ directory and write 
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

e) navigate to the layout.tsx file in the src/app/ directory and wrap the content in <ClerkProvider>...</ClerkProvider> tags after importing clerkProvider 
              
            from import { ClerkProvider } from "@clerk/nextjs";
            .
            .
            .
            return(
              <ClerkProvider>
                  ...
                  ...
                  ...<SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
              </ClerkProvider>
            )

3. To build a custom sign-in or sign-up page::

   in the app directory create sign-in/[[...sign-in]]/page.tsx or sign-up/[[...sign-up]]/page.tsx
4. to set up mongodb part
bun i mongodb mongoose svix
