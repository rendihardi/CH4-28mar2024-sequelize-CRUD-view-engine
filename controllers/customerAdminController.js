const { Customer } = require("../models");

const customerPage = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.render("customers/index.ejs", {
      customers,
    });
  } catch (err) {
    res.render("error.html", {
      message: err.message,
    });
  }
};

const createCustomerPage = async (req, res) => {
  try {
    res.render("customers/create.ejs");
  } catch (err) {
    res.render("error.html", {
      message: err.message,
    });
  }
};

const editCustomerPage = async (req, res) => {
  try {
    const editCustomerPage = await Customer.finByPk(req.params.id);
    res.render("customers/edit.ejs");
  } catch (err) {
    res.render("error.html", {
      message: err.message,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.redirect("/customers");
  } catch (err) {
    res.render("error.htmll", {
      message: err.message,
    });
  }
};

const editCustomer = async (req, res) => {
  try {
    const customer = await Customer.update(req.params.id, req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/customers");
  } catch (err) {
    res.render("error.htmll", {
      message: err.message,
    });
  }
};
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.destroy(req.params.id, req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/customers");
  } catch (err) {
    res.render("error.htmll", {
      message: err.message,
    });
  }
};

module.exports = {
  customerPage,
  createCustomerPage,
  createCustomer,
  editCustomerPage,
  editCustomer,
  deleteCustomer,
};
