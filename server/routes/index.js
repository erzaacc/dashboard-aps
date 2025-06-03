const router = require("express").Router();

router.get("/test", (req, res) => {
  return responseHandler.success(res, "Test Route");
});

const ticketRoutes = require("./ticket.routes");

router.use("/ticket", ticketRoutes);

module.exports = router;
