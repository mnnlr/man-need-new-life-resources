import Performance from "../Models/PerformanceModel.js";
import calculateTotalWorkingHours from "../utils/calculateWorkinHours.js";

const getAllPerformance = async (req, res,next) => {
  try {
    const performance = await Performance.find({}).populate({
      path:'employeeDocId',
      select: 'firstName lastName avatar designation designationLevel employeeId'
    });

    res.status(200).json({ success: true, performance });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const AllEmployeeAttandance = async (req, res) => {
  try {
    const performances = await Performance.find({}).populate({
      path: 'employeeDocId',
      select: 'firstName lastName avatar designation designationLevel employeeId'
    }).lean(); // Convert Mongoose documents to plain JavaScript objects

    // Object to store attendance details for each employee
    const attendanceByEmployee = {};

    const period = 'today'; 


    for (let performance of performances) {
      const { hours, minutes, seconds } = await calculateTotalWorkingHours(performance, period);
      const totalWorkingHours = `${hours}:${minutes}:${seconds}`;

      const employeeId = performance.employeeDocId._id;


      if (!attendanceByEmployee[employeeId]) {
        attendanceByEmployee[employeeId] = {
          employee: performance.employeeDocId,
          totalWorkingHours: totalWorkingHours,
          attendanceCount: 1 
        };
      } else {
        attendanceByEmployee[employeeId].totalWorkingHours = totalWorkingHours;
        attendanceByEmployee[employeeId].attendanceCount++;
      }
    }

    const attendanceArray = Object.values(attendanceByEmployee);

    res.status(200).json({ success: true, attendance: attendanceArray });
  } catch (error) {
    console.log(error);
    next(error);
  }
}


const gerPerformanceByWorkingHour = async (req, res,next) => {
  try {

      const {period} = req.query;
      console.log('period : ',period);
      // Fetch all performance records and populate employee details
      const performances = await Performance.find({}).populate({
        path: 'employeeDocId',
        select: 'firstName lastName avatar designation designationLevel employeeId'
      }).lean(); // Convert Mongoose documents to plain JavaScript objects
  
      // Specify the period for which you want to calculate working hours
      // const period = 'today'; // Change this to 'week', 'month', or 'year' as needed
  
      // Calculate total working hours for each performance record
      for (let performance of performances) {
        const { hours, minutes, seconds } = await calculateTotalWorkingHours(performance, period);
        performance.totalWorkingHour = `${hours}:${minutes}:${seconds}`;
      }
  
      // Sort employees by total working hours
      const sortedPerformances = performances.sort((a, b) => b.totalWorkingHour - a.totalWorkingHour);
  
    console.log('sortedPerformances : ',sortedPerformances);
    res.status(200).json({ success: true, performance: sortedPerformances });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export {getAllPerformance,gerPerformanceByWorkingHour,AllEmployeeAttandance}