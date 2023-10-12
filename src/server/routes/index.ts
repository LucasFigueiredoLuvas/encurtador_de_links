import { Router } from "express";
import { ApplicationController } from "../../controllers";
const router = Router();

router.get("/", ApplicationController.home);
router.get("/sobre", ApplicationController.about);

export {
  router
};
