import express from "express";
const router = express.Router();
import postsController from "./controller";

router.get("/", postsController.getAll.bind(postsController));

router.get("/:id", postsController.getById.bind(postsController));

router.post("/", postsController.create.bind(postsController));

router.delete("/:id", postsController.delete.bind(postsController));

router.put("/:id", postsController.update.bind(postsController));

export default router;
