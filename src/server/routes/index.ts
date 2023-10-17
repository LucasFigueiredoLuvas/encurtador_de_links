import { Router } from "express";
import { ApplicationController, UsersController } from "../../controllers";
const router = Router();

router.get("/", ApplicationController.home);
router.get("/sobre", ApplicationController.about);
router.get("/usuario-novo", UsersController.signUp);
router.post("/usuario", UsersController.create);

export {
  router
};
