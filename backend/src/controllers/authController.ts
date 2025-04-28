import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  // TODO: Implement real authentication logic
  if (username === "admin" && password === "password") {
    const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
};

export const register = (req: Request, res: Response) => {
  // TODO: Implement user registration logic
  res.status(201).json({ message: "User registered (stub)" });
};
