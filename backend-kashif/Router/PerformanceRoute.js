import {Router} from "express";

const router = Router();

import {getAllPerformance,gerPerformanceByWorkingHour,AllEmployeeAttandance} from '../Controllers/PerformanceController.js'


router.route('/').get(getAllPerformance)
router.route('/rank').get(gerPerformanceByWorkingHour)
router.route('/attendance').get(AllEmployeeAttandance)

export default router;