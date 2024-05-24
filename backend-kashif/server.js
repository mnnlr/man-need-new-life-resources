import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import Connection from "./DataBase/DataBaseConnection.js";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import configDotenv from "dotenv";
// import dashboardRoute from "./Router/statisticsRoute.js";
import path from "path";

const app = express();

if (process.env.NODE_ENV !== "production") {
  configDotenv.config({
    path: "config/config.env",
  });
}

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyParser.json());

app.use(cookieParser("MY SECRET"));

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    withCredentials: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import ContectusRouter from "./Router/ContectusRouter.js";

import clientRouter from "./Router/ClientRoute.js";
import orderRoutes from "./Router/orderRoute.js";
import pageRoutes from "./Router/pageRoute.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import portfolioRoute from "./Router/portfolioRoute.js";
import projectRoute from "./Router/projectRoute.js";
import client from "./Router/clientRouter.js";
import companyRouter from "./Router/companyRoute.js";
import dashboardRoute from "./Router/statisticsRoute.js";
import visitRoute from "./Router/visitorRoute.js";
import employeeRoute from "./Router/employeeDataRoute.js";
import userRoute from "./Router/userEmployeeRoute.js";
import userRouter from "./Router/user_routes.js";
import authenticateRouter from "./Router/AuthenticateRoute.js";
import PerformanceRoute from "./Router/PerformanceRoute.js";
import webDesignRouter from "./Router/webDesignRoutes.js";
import EmployeeRegistrationRoute from "./Router/employeeRegistraionRoute.js";
import LeaveRouter from "./Router/LeaveRoute.js";
import teamRoute from "./Router/TeamRoute.js"

app.use(userRouter);
app.use(webDesignRouter);

app.use("/authenticate", authenticateRouter);
app.use("/api/v1", ContectusRouter);

app.use("/client", clientRouter);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/page", pageRoutes);
app.use("/api/v1", portfolioRoute);
app.use("/api/v1", projectRoute);
app.use("/api/v1", EmployeeRegistrationRoute);

app.use("/api/v1", client);
app.use("/api/v1", companyRouter);
app.use("/api/v1", dashboardRoute);
app.use("/api/v1", visitRoute);
app.use("/api/v1", employeeRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1/performance", PerformanceRoute);

app.use("/leave", LeaveRouter);
app.use("/team", teamRoute);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//=============================for live api check===============================
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});
// ================================================================


app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;

Connection();

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
