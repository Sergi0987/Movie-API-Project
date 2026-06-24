import { Router } from "express";
import indexHome from "../controllers/indexController.js";
const indexRouter = Router();

indexRouter.get('/', indexHome);

export default indexRouter;