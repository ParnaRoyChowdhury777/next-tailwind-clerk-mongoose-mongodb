//Server component (api route) to check whether the user is authenticated or not

import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = await auth(); //to check whether the user is authenticated(sign in) or not
    const user = await currentUser(); //to get the current user details

    if (!userId) {
        return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
    }

    return NextResponse.json({
        message: "Authenticated",
        data: { userId: userId, username: user?.username },
    },
        {
            status: 200,
        });
}