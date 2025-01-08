import { Request, Response } from "express";
import BaseController from "../common/base_controller";
import { Comments, commentModel } from "./comments_model";

class CommentsController extends BaseController<Comments> {
  constructor() {
    super(commentModel);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    if (!req.query) super.getAll(req, res);
    try {
      const comments = await commentModel.find(req.query as Partial<Comments>);
      res.send(comments);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default new CommentsController();