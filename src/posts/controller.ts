import { Post, postModel } from "./model";
import { Request, Response } from "express";
import BaseController from "../common/base_controller";

class PostsController extends BaseController<Post> {
  constructor() {
    super(postModel);
  }

  async getAll(req: Request, res: Response) {
    if (!req.query) {
      console.log("here1");
      super.getAll(req, res);
    } else {
      try {
        console.log("here2");
        const items = await this.model.find(req.query as Partial<Post>);
        res.send(items);
      } catch (error) {
        res.status(400).send(error);
      }
    }
  }
}

export default new PostsController();