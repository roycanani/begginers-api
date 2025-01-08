import mongoose from "mongoose";

export interface Comments {
  postId: string;
  content: string;
  sender: string;
}

const CommentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  sender: {
    type: String,
    required: true,
  },
});

export const commentModel = mongoose.model<Comments>("Comment", CommentSchema);
