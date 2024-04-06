const { Customer } = require("../models");

const getCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    res.status(200).json({
      status: "success",
      data: {
        totalData: customers.length,
        customers,
      },
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};
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
  getCustomer,
};
