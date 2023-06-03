import mongoose from "mongoose";
import { MONGODB_URI } from "core/commons/constants";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variable.");
}

// @ts-ignore
let cached: any = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = await mongoose
      .connect(MONGODB_URI || "mongodb://localhost:27017/test")
      .catch((err) => console.log(err.message));
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

