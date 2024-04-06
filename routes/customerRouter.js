const router = require("express").Router();

const Customer = require("../controllers/customerController");

router.post("/", Customer.createCustomer);
router.get("/", Customer.getCustomer);

module.exports = router;
