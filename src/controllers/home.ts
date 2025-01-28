import { Request, Response } from "express";
import { findFeedback } from "../services/feedback";

export const getHome = async (req: Request, res: Response) => {
   const feedbacks = await findFeedback();
   res.render("pages/home", { feedbacks });
}