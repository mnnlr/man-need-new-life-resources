import {Router} from 'express';

const router = Router();

import { createTeam,getTeam } from '../Controllers/teamController.js';

router.route('/').get(getTeam).post(createTeam);

export default router;