import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, login again",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ attach trusted data here
    req.user = {
      id: decoded.id,
    };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "Error",
    });
  }
};

export default authMiddleware;
