import { Request, Response } from "express";
// import { prisma } from "../../database/prisma";

type User = {
  name: string,
  email: string,
  password: string,
  admin: boolean
}

export async function create (req: Request, res: Response) {
  const a = req.query;
  console.log(a);
  res.status(200).render("./user/signUp");
}

export async function signUp (req: Request, res: Response) {
  res.status(200).render("./user/create");
  
  // if (user.name.length < 1) {
  //   return await prisma.user.create({
  //     data: user,
  //   });
  // } else {
  //   return new Error("invalid name!");
  // }
}
