import { Request, Response } from "express";

export async function home (req: Request, res: Response) {
  return res.status(200).render("home");
}
