import BaseController from "../common/base_controller";
import { Comments, commentModel } from "./comments_model";

const commentsController = new BaseController<Comments>(commentModel);


export default commentsController