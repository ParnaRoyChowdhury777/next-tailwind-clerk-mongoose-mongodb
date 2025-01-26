import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!; // "!" is used to tell TypeScript that the variable is always defined

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
} //fetches the cached connection, no need to connect again

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connect = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!MONGODB_URI) {
        throw new Error(
            "Please define the MONGODB_URI environment variable inside .env.local"
        );
    }

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "nextjsclerkmongoosetemplate",
        bufferCommands: false,
        connectTimeoutMS: 30000,
    });

    cached.conn = await cached.promise;

    return cached.conn;

}