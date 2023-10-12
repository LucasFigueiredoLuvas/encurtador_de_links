import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  return res.status(200).render("home", { ok: "url" });
};
