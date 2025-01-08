import mongoose from "mongoose";

export interface Post {
  title: string;
  content: string;
  sender: string;
  comments: string[];
}

const postSchema = new mongoose.Schema<Post>({
  title: { type: String, required: true },
  content: String,
  sender: { type: String, required: true },
  comments: { type: [String], default: [] },
});

export const postModel = mongoose.model<Post>("Post", postSchema);
