import express from 'express';
import homeCtrl from '../controllers/home';

const router = express.Router();

/**
 * @route /
 */
router.route('/api')
  .get(homeCtrl.get);

export default router;