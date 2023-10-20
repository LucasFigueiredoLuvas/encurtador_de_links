import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createUser } from "../../models/User";

export async function create (req: Request, res: Response) {
  const valid = validationResult(req);
  const { name, email, password } = req.body;
  
  if (!valid.isEmpty()) {
    return res.status(400).render("./user/new", { errors: valid.array() });//" //
  }

  try {
    const user = await createUser({ name, email, password });
    res.status(200).render("./user/show", { user, errors: null });
  } 
  catch (error) {
    console.error(error);    
    return res.status(500).render("./user/new", { errors: [{ path: "Erro", msg: "Ocorreu um erro" }] });
  }
}

export async function newAccount (req: Request, res: Response) {
  res.status(200).render("./user/new", { errors: null });
}
// 7d7JxvZAL@ZpRq6