const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    return res.status(403).send("Authorization token not found.");
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send(`Invalid Token. \n${error}`);
  }
  next();
};

module.exports = { verifyToken };
