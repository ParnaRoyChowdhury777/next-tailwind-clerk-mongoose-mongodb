//This is a client-side component and this route is protected using middleware.ts file

"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

function ClientPage() {
  const { isLoaded, isSignedIn, user } = useUser(); //to check whether the user is authenticated(signed in) or not

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello, {user.firstName} Welcome to Clerk!
    </div>
  );
}

export default ClientPage;
