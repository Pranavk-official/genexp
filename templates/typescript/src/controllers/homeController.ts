import { Request, Response } from "express";

export const index = (req: Request, res: Response): void => {
  res.render("home", { title: "Express MVC App" });
};
