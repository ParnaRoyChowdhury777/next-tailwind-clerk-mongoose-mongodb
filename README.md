# Starter Authentication Kit with Next.js, Tailwind CSS, Clerk and MongoDB using Mongoose

This is a complete starter kit for building authentication-powered applications using **Next.js**, **Tailwind CSS**, **Clerk** and **MongoDB** with **Mongoose** for database management. It comes pre-configured with user authentication, database integration, and a customizable UI to help you get started quickly.

<br>

## Features

- **Next.js** for fast and modern React-based web applications.
- **Tailwind CSS** for easy and customizable styling.
- **Clerk** for user authentication (sign-in, sign-up, and user management).
- **MongoDB** as the database.
- **Mongoose** for schema-based object modeling.
- Pre-configured routes and middleware for authentication.
- Custom sign-in and sign-up pages.
- Scalable project structure.

<br>

## Prerequisites

- **Node.js** (v18+ recommended)
- **Bun** (package manager)
- **MongoDB** (running instance or cloud database, e.g., MongoDB Atlas)
- **Clerk Account** ([Sign up for Clerk](https://clerk.dev))

<br>

## How to use the template

1. Clone the repository `git clone https://github.com/ParnaRoyChowdhury777/next-tailwind-clerk-mongoose-mongodb.git` or download the zip file.
2. Open the project in your favorite code editor.
3. Navigate to the project directory cd next-tailwind-clerk-mongoose-mongodb.
4. Install the dependencies `bun install`.
5. Create a .env file in the root directory which contains the following:

   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY=sk_test_YOUR_CLERK_SECRET_KEY

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   MONGODB_URI=<Your MongoDb URI>

   WEBHOOK_SECRET=<Your Clerk Webhook Secret>
   ```
6. Start the development server `bun run dev`
7. Open http://localhost:3000 in your browser

<br>

## Installation

### 1. Create a New Next.js Application

Run the following command to bootstrap a Next.js app with the required configuration:

```bash
bun create next-app <app_name>
```

When prompted:

- Use TypeScript: **Yes**
- Use ESLint: **Yes**
- Use Tailwind CSS: **Yes**
- Use the `src/` directory: **Yes**
- Use App Router: **Yes**
- Use Turbopack: **No**
- Customize the import alias: **Yes**
  - Enter: `@/*`

### 2. Set Up Clerk

#### a) Create a Clerk Application

1. Go to the [Clerk Dashboard](https://clerk.dev/).
2. Create a new application and note down the `PUBLISHABLE_KEY` and `SECRET_KEY`.

#### b) Install Clerk in Your Project

Run the following command to install the Clerk SDK:

```bash
bun install @clerk/nextjs
```

#### c) Configure Environment Variables

Add the following keys to your `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=sk_test_YOUR_CLERK_SECRET_KEY
```

#### d) Create a `middleware.ts` File

Create a `middleware.ts` file in the `src/` directory and add:

```typescript
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

#### e) Wrap Your Application in the `ClerkProvider`

In the `src/app/layout.tsx` file, wrap your application with the `ClerkProvider`:

```tsx
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
```



### 3. Custom Sign-In/Sign-Up Pages

You can create custom pages for sign-in and sign-up by adding the following files in the `src/app` directory:

- `sign-in/[[...sign-in]]/page.tsx`  
- `sign-up/[[...sign-up]]/page.tsx`

Add your custom logic and UI components to these files as needed.


### 4. Set Up MongoDB with Mongoose

#### a) Install MongoDB and Mongoose

Run the following command to install MongoDB and Mongoose:

```bash
bun install mongodb mongoose svix
```

#### b) Connect to MongoDB

Create a `src/db.ts` file and set up your MongoDB connection

#### c) Example Schema

Create a `src/models/user.model.ts` file for a basic User schema

#### d) Actions

Create a `src/actions/user.action.ts` file for basic User actions


### 5. Run the Application

Start your application with:

```bash
bun run dev
```

Your app is now running at `http://localhost:3000`.

<br>

## Project Structure

```plaintext
.
├── src
│   ├── actions
│   │   └── user.action.ts 
│   ├── app
│   │   ├── api
│   │   ├── layout.tsx       // App layout with ClerkProvider
│   │   ├── page.tsx         // Default home page
│   │   ├── sign-in          // Custom sign-in page
│   │   ├── sign-up          // Custom sign-up page
│   │   └── globals.css
│   ├── db.ts
│   ├── middleware.ts        // Clerk middleware
│   ├── models
│   │   └── user.model.ts          // Example Mongoose schema
├── .env.local               // Environment variables
└── README.md                // Documentation
```

<br>

## Key Features

- **Authentication:** Pre-built integration with Clerk for user sign-in, sign-up, and management.
- **Database:** Easily integrate MongoDB with Mongoose.
- **Styling:** Tailwind CSS is pre-configured for rapid UI development.
- **Custom Pages:** Fully customizable authentication pages.
- **Middleware:** Clerk middleware to protect routes seamlessly.

<br>

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. Let's make this starter kit even better!

<br>

## Contact

parnaroychowdhury2020@gmail.com



