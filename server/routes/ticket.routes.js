const router = require("express").Router();
const ticketController = require("../controllers/ticket/ticket.controller.js");

// Define routes
router.get("/", ticketController.getTicket);
// router.get("/:id", ticketController.getTicketById);

router.get("/top-module", ticketController.getTopModule);

module.exports = router;
