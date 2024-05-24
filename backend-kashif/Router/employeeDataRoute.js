import { Router } from "express";
import {
  createEmployeeDetails,
  getAllEmployee,
  getEmployeeById,
} from "../Controllers/employeeDataController.js";

import { isAuthenticated } from "../middleware/auth.js";

const router = Router();

router.route("/employee/new").post(createEmployeeDetails);
router.route("/employees").get(getAllEmployee);

router.route('/employee/byId/:id').get(isAuthenticated,getEmployeeById)
router.route('/employee/empId/:employeeId').get(isAuthenticated,getEmployeeById)

export default router;
