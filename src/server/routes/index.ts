import { Router } from "express";
import { ApplicationController, UsersController } from "../../controllers";
import { validationNewUserFields } from "../../helpers/userValidators";
const router = Router();

router.get(
  "/",
  ApplicationController.home
);

router.get(
  "/sobre", 
  ApplicationController.about
);

router.get(
  "/novo-usuario/", 
  UsersController.newAccount
);

router.post(
  "/usuario/",
  validationNewUserFields,
  UsersController.create
);

export {
  router
};
