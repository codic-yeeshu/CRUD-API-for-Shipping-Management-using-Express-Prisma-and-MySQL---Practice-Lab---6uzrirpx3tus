const { Router } = require("express");
const { authenticate } = require("../middlewares/auth");
const {
  createShipping,
  cancelShipping,
  getShipping,
} = require("../controller/shipping");

`Create a Shipping Record: POST /api/shipping/create
Cancel a Shipping Record: PUT /api/shipping/cancel
Retrieve Shipping Records: GET /api/shipping/get`;

const router = Router();

router.use(authenticate);

router.post("/create", createShipping);
router.put("/cancel", cancelShipping);
router.get("/get", getShipping);

module.exports = router;
