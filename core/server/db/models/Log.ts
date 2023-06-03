import mongoose, { Schema } from "mongoose";

export const logSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: String,
  api: String,
});

const Log = mongoose.model("Log", logSchema);

export default mongoose.models.Log || Log;
