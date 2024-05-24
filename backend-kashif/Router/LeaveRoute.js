import {Router} from 'express';
const router = Router();

import { getAllLeaveRequest,leaveRequest,getLeaveRequestById,approveLeaveRequest} from '../controllers/LeaveController.js';

router.route('/').get(getAllLeaveRequest).post(leaveRequest);
router.route('/:id').get(getLeaveRequestById).put(approveLeaveRequest);

export default router;