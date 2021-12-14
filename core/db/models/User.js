import { Schema } from "mongoose";

export const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  meta: {
    isSpecial: Boolean,
    data: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;