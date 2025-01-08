import mongoose from "mongoose";

export interface Comments {
    postId: string;
    content: string;
    userId: string;
  }

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

export const commentModel = mongoose.model<Comments>("Comment", CommentSchema);
