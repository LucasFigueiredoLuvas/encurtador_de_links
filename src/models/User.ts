import { User } from "@prisma/client";
import { prisma } from "../database/prisma";
import * as bcrypt from "bcrypt";

type NewUser = {
  name: string, 
  email: string, 
  password: string
}

type UpdateUser = {
  id: string;
  name: string;
  email: string;
  password: string;
}

type EditUser = {
  id: string;
}

export async function createUser(newUser: NewUser): Promise<User | Error> {
  const { name, email, password } = newUser;
  const saltRounds = 10;

  try {
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: encryptedPassword,
        admin: false
      }
    });

    return user;  
  } 
  catch(error) {
    console.error(error);    
    throw new Error(error as string);
  }  
}

export async function updateUser(updateUser: UpdateUser): Promise<User | Error> {
  const { id, name, email, password } = updateUser;
  
  const user = await prisma.user.update({
    where: {
      id: id
    },
    data: {
      name, 
      email,
      password
    }
  });

  return user;
}

export async function findUser(editUser: EditUser): Promise<User | null> {
  const { id } = editUser;
  
  const user = await prisma.user.findUnique({
    where: { id }
  });

  return user;
}