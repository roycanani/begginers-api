import mongoose from "mongoose";

export interface Post {
  title: string;
  content: string;
  senderId: mongoose.Schema.Types.ObjectId;
  comments: mongoose.Schema.Types.ObjectId[];
}

const postSchema = new mongoose.Schema<Post>({
  title: { type: String, required: true },
  content: { type: String },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
    default: [],
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const postModel = mongoose.model<Post>("Post", postSchema);
