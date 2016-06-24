import { Router } from 'express';
import * as SearchController from '../controllers/search.controller';
const router = new Router();

router.route('/searchHotwire').post(SearchController.carSearch);

export default router;
