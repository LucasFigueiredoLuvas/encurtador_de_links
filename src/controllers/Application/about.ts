import { Request, Response } from "express";

export async function about (req: Request, res: Response) {
  return res.status(200).render("./layouts/about", { about: "Sobre" });
}
