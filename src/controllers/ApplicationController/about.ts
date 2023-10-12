import { Request, Response } from "express";

export const about = (req: Request, res: Response) => {
  return res.status(200).render("./layouts/about", { about: "Sobre" });
};
