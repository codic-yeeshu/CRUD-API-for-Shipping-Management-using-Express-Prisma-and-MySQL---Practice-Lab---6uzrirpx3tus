// const SECRET = process.env.SHIPPING_SECRET_KEY;
const SECRET = "a1b2c3d4e5f67890123456789abcdef";
const authenticate = (req, res, next) => {
  try {
    const secret = req.headers["SHIPPING_SECRET_KEY".toLowerCase()];

    if (!secret)
      return res.status(403).json({
        error: "SHIPPING_SECRET_KEY is missing or invalid",
      });
    if (!(secret === SECRET))
      return res.status(403).json({
        error: "Failed to authenticate SHIPPING_SECRET_KEY",
      });
    next();
  } catch (err) {
    console.error(
      `Error occurred in file: auth middleware, function: authenticate -`,
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { authenticate };
