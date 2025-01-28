import { Request, Response } from "express";
import { feedback, findFeedback } from "../services/feedback";

export const getFeedback = async (req: Request, res: Response) => {
    const feedbacks = await findFeedback();
    res.json({ feedbacks });
}
export const addFeedback = async (req: Request, res: Response) => {
    const { name, email, description } = req.body;
    var fileImage = (req.files ? req.files.image : null);


    if (name && email && description) {
        const newFeedback = await feedback(req.body, fileImage);
        if (newFeedback) {
            res.json({ status: 'Feddback realizado com sucesso!' });
            return;
        }
        res.json({ status: 'Erro ao realizar o feedback!' });

    }

}