import express from "express";
import usersController from "./users_controller";
export const usersRouter = express.Router();

usersRouter.delete("/:id", usersController.delete.bind(usersController));
usersRouter.post("/", usersController.create.bind(usersController));

usersRouter.get("/", usersController.getAll.bind(usersController));

usersRouter.put("/:id", usersController.update.bind(usersController));

usersRouter.get("/:id", usersController.getById.bind(usersController));
