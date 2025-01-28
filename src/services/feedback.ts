import path from "path";
import { prisma } from "../utils/prisma";
import fs, { mkdirSync } from "fs";

export const findFeedback = async () => {
  const feedbacks = await prisma.feedbacks.findMany();
  return feedbacks;
}

export const feedback = async (data: any, image: any) => {
  const dirname = path.join(__dirname, '../../public/assets/media/');

  const date = new Date();
  let newImage = (data.image != data.image ? '' : null);

  const newFeedback = await prisma.feedbacks.create({
    data: {
      name: data.name,
      email: data.email,
      description: data.description,
      image: image.name,
      date: date
    }
  });


  if (image !== null) {
    if (!fs.existsSync(dirname + newFeedback.id)) {
      mkdirSync(dirname + newFeedback.id);
      image.mv(dirname + newFeedback.id + '/' + image.name);
    }
  }
  return newFeedback;
}