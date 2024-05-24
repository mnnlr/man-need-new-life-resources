import { ErrorHandler } from "../utils/errorHendler.js"
import jwt from "jsonwebtoken"

// import User from "../Models/UserModel.js";

const isAuthenticated = async(req,res,next) => {
    try {
        
            const token = req.cookies["Token"]
            if(!token) return next(new ErrorHandler(401,"Please logIn to access"))
        
            const decodedData = jwt.verify(token,process.env.JWT_SECRET);
        
            req.user = {_id:decodedData?._id}
        
            next()

    } catch (error) {
        next(error)
    }


}

export {isAuthenticated}