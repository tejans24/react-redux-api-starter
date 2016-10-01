import express from 'express';
import homeRoutes from './home';

const router = express.Router();

// mount routes
router.use('/', homeRoutes);

export default router;
