const responseHandler = require("../../helpers/responseHandler");
const { getTicket, getTopModule } = require("../../services/ticket/ticket.service");

class ticketController {
  static async getTicket(req, res) {
    try {
      const result = await getTicket(req);

      if (!result.success) {
        responseHandler.notFoundResponse(res, result.message);
      }

      return responseHandler.successPaginationResponse(
        res,
        "Successfully fetched",
        result.data.count,
        result.data.totalPages,
        result.data.page,
        result.data.rows
      );
    } catch (error) {
      responseHandler.errorResponse(res, error.message);
    }
  }

  static async getTopModule(req, res) {
    try {
      const result = await getTopModule(req);

      if (!result.success) {
        responseHandler.notFoundResponse(res, result.message);
      }

      return responseHandler.successResponse(
        res,
        "Successfully fetched",
        result.data
      );
    } catch (error) {
      responseHandler.errorResponse(res, error.message);
    }
  }
}

module.exports = ticketController;
