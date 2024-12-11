const express = require("express");
const dotenv = require("dotenv");
const shippingRoute = require("./routes/shipping");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is up!");
});

app.use("/api/shipping", shippingRoute);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
