import EmployeeSchema from "../Models/employeeSchema.js";
import cloudinary from "cloudinary";
import { hash } from "bcrypt";
import { sendEmail } from "../utils/sendEmail.js";
import user from "../Models/user_model.js";
import { ErrorHandler } from "../utils/errorHendler.js";

export const getAllEmployee = async (req, res) => {
  try {
    const employee = await EmployeeSchema.find({});
    res.status(200).json({ success: true, employee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getEmployeeById = async (req, res,next) => {
  try {
      console.log('req.params : ',req.params);
      const { id,employeeId } = req.params;

      let query = {};
      if(id){
          query = { _id:id }
      }

      if(employeeId){
          query = { employeeId:employeeId }
      }

      const employee  = await EmployeeSchema.findOne(query);
      if(!employee){
          return next(new ErrorHandler(404, "Employee not found"));
      }

      res.status(200).json({ employee, success: true });
  }
  catch (error) {
      next(new ErrorHandler(500, error.message));
  }
}

export const createEmployeeDetails = async (req, res) => {
  try {
    const myCloud1 = await cloudinary.v2.uploader.upload(req.body.aadhar, {
      resource_type: "auto",
      folder: "files",
      width: 150,
      crop: "scale",
      format: "pdf", // Change format to PDF
      overwrite: true,
    });

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    const myCloud2 = await cloudinary.v2.uploader.upload(req.body.pan, {
      resource_type: "auto",
      folder: "files",
      width: 150,
      crop: "scale",
      format: "pdf", // Change format to PDF
      overwrite: true,
    });

    const myCloud3 = await cloudinary.v2.uploader.upload(req.body.Bank, {
      resource_type: "auto",
      folder: "files",
      width: 150,
      crop: "scale",
      format: "pdf", // Change format to PDF
      overwrite: true,
    });

    const myCloud4 = await cloudinary.v2.uploader.upload(req.body.PF, {
      resource_type: "auto",
      folder: "files",
      width: 150,
      crop: "scale",
      format: "pdf", // Change format to PDF
      overwrite: true,
    });

    const myCloud5 = await cloudinary.v2.uploader.upload(
      req.body.xthMarksheet,
      {
        resource_type: "auto",
        folder: "files",
        width: 150,
        crop: "scale",
        format: "pdf", // Change format to PDF
        overwrite: true,
      }
    );
    const myCloud6 = await cloudinary.v2.uploader.upload(
      req.body.xiithMarksheet,
      {
        resource_type: "auto",
        folder: "files",
        width: 150,
        crop: "scale",
        format: "pdf", // Change format to PDF
        overwrite: true,
      }
    );
    const myCloud7 = await cloudinary.v2.uploader.upload(
      req.body.graduationMarksheet,
      {
        resource_type: "auto",
        folder: "files",
        width: 150,
        crop: "scale",
        format: "pdf", // Change format to PDF
        overwrite: true,
      }
    );

    const myCloud8 = await cloudinary.v2.uploader.upload(req.body.pgMarksheet, {
      resource_type: "auto",
      folder: "files",
      width: 150,
      crop: "scale",
      format: "pdf", // Change format to PDF
      overwrite: true,
    });

    const {
      firstName,
      lastName,
      fatherName,
      motherName,
      address,
      phoneNo,
      email,
      description,
      designation,
      designationLevel,
      employeeId,
    } = req.body;

    const hashedPassword = await hash("password", 10);

    const User = await user.create({
      username: email,
      password: hashedPassword,
      role: "employee",
    });

    const message = `Your temp uaermane and password is :- ${email} and ${"password"}' \n\n 
    If you have not requested this email then, please ignore it `;

    await sendEmail(email, "Employee Id Generation", message);

    console.log("Email sent successfully");

    const employeeDetails = await EmployeeSchema.create({
      firstName,
      lastName,
      fatherName,
      motherName,
      address,
      phoneNo,
      email,
      description,
      designation,
      designationLevel,
      employeeId,
      userId: User._id,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      aadhar: {
        public_id: myCloud1.public_id,
        url: myCloud1.secure_url,
      },
      pan: {
        public_id: myCloud2.public_id,
        url: myCloud2.secure_url,
      },
      Bank: {
        public_id: myCloud3.public_id,
        url: myCloud3.secure_url,
      },
      PF: {
        public_id: myCloud4.public_id,
        url: myCloud4.secure_url,
      },
      xthMarksheet: {
        public_id: myCloud5.public_id,
        url: myCloud5.secure_url,
      },
      xiithMarksheet: {
        public_id: myCloud6.public_id,
        url: myCloud6.secure_url,
      },
      graduationMarksheet: {
        public_id: myCloud7.public_id,
        url: myCloud7.secure_url,
      },
      pgMarksheet: {
        public_id: myCloud8.public_id,
        url: myCloud8.secure_url,
      },
    });

    res.status(201).json({
      success: true,
      message: "Data Saved Successfully",
      employeeDetails,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


