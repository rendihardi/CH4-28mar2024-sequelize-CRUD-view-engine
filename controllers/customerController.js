const { Customer } = require("../models");

const createCustomer = async (req, res, next) => {
  // Destructuring object
  const { name, age, email, city } = req.body;
  try {
    const newCustomer = await Customer.create({
      name,
      email,
      age,
      city,
    });
    res.status(200).json({
      status: "success",
      data: {
        newCustomer,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat membuat pelanggan baru.",
    });
  }
};

module.exports = {
  createCustomer,
};
