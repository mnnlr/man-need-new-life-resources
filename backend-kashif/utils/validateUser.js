import Admin from "../Models/adminUserSchema.js";

export const verify = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json("the token available");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        console.log(err);
        if (err.name === "TokenExpiredError") {
          Admin.findOneAndUpdate(
            { username: decoded.username, logoutTime: { $exists: false } },
            { logoutTime: new Date() },
            { new: true }
          );
        }
        return res.json("token is wrong");
      }
      next();
    });
  }
};
