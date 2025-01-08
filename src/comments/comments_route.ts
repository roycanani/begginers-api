import express from "express";
import commentsController from "./comments_controller";
export const commentsRouter = express.Router();

commentsRouter.get("/", commentsController.getAll.bind(commentsController));
commentsRouter.get("/", commentsController.getAll.bind(commentsController));
commentsRouter.get("/:id", commentsController.getById.bind(commentsController));
commentsRouter.put("/:id", commentsController.update.bind(commentsController));
commentsRouter.post("/", commentsController.create.bind(commentsController));
commentsRouter.delete(
  "/:id",
  commentsController.delete.bind(commentsController)
);
