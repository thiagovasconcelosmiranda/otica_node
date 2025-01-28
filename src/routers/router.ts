import {Router} from 'express';
import * as homeController from '../controllers/home';
import * as contactController from '../controllers/contact';
import * as feedbackController from '../controllers/feedback';
export const router = Router();

router.get('/', homeController.getHome);
router.post('/contato', contactController.addContact);
router.post('/feedback', feedbackController.addFeedback);
router.post('/ajax/feedback', feedbackController.getFeedback);