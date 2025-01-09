import mongoose from "mongoose";

export interface Comment {
  postId: mongoose.Schema.Types.ObjectId;
  content: string;
  senderId: mongoose.Schema.Types.ObjectId;
}

const CommentSchema = new mongoose.Schema<Comment>({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  content: {
    type: String,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const commentModel = mongoose.model<Comment>("Comment", CommentSchema);
