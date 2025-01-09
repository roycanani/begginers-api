import mongoose from "mongoose";

export interface User {
  userName: string;
  password: string;
  email: string;
  phone_number?: string | null;
}

const userSchema = new mongoose.Schema<User>({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

export const userModel = mongoose.model<User>("Users", userSchema);
