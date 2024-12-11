const { prisma } = require("../db/config");

const createShipping = async (req, res) => {
  try {
    const { userId, productId, count } = req.body;

    if (!userId || !productId || !count)
      return res.status(404).json({
        error: "All fields required",
      });

    const newShipping = await prisma.shipping.create({
      data: { userId, productId, count },
    });

    return res.status(201).json(newShipping);
  } catch (err) {
    console.error(
      `Error occurred in file: shipping controller, function: createShipping -`,
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const cancelShipping = async (req, res) => {
  try {
    const { shippingId } = req.body;
    if (!shippingId)
      return res.status(404).json({
        error: "Missing shippingId",
      });
    const parsedId = parseInt(shippingId, 10);
    const updatedShipping = await prisma.shipping.update({
      where: { id: parsedId },
      data: { status: "cancelled" },
    });
    return res.status(200).json(updatedShipping);
  } catch (err) {
    console.error(
      `Error occurred in file: shipping controller, function: canelShipping -`,
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getShipping = async (req, res) => {
  try {
    const { userId } = req.query;
    const parsedId = parseInt(userId, 10);

    const allShipping = await prisma.shipping.findMany({
      where: userId ? { userId: parsedId } : {},
    });

    return res.status(200).json(allShipping);
  } catch (err) {
    console.error(
      `Error occurred in file: shipping controller, function: getShipping -`,
      err
    );
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createShipping, cancelShipping, getShipping };
