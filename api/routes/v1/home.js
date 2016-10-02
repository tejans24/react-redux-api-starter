import express from 'express';
import homeCtrl from '../../controllers/home';

const router = express.Router();

/**
 * @route /
 */
router.route('/')
  .get(homeCtrl.get);

export default router;