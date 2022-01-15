import mongoose from "mongoose";
import { MONGODB_URI } from "core/utils/constants";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variable.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = await mongoose.connect(MONGODB_URI).catch((err) => console.log(err.message));
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
