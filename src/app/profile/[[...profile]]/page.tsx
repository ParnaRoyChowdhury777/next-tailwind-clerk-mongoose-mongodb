//This is a server-side component and this route is protected from within the file itself

import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function Profile() {
  const { userId } = await auth(); //to check whether the user is authenticated(signed in) or not
  const isAuth = !!userId;
  const user = await currentUser(); //to get the current user details

  if (!isAuth) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-2xl">{user?.username}</h1>
      <UserProfile />
    </div>
  );
}

export default Profile;
