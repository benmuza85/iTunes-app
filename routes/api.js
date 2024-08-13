import { Router } from 'express';
import { searchiTunes } from '../controllers/itunesController.js';
const router = Router();

// Define the /search route to handle search requests
router.get('/search', searchiTunes);

export default router;
