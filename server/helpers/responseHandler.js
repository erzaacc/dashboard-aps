
module.exports = {
  // Response
  successResponse: (res, message, data) => {
    res
      .status(200)
      .json({
        meta: {
          code: 200,
          status: "OK",
          message: message,
        },
        data: data,
      })
      .end();
  },
  createResponse: (res, message, data) => {
    res
      .status(201)
      .json({
        meta: {
          code: 201,
          status: "CREATED",
          message: message,
        },
        data: data,
      })
      .end();
  },
  invalidResponse: (res, message) => {
    res
      .status(400)
      .json({
        meta: {
          code: 400,
          status: "INVALID_REQUEST",
          message: message,
        },
        data: null,
      })
      .end();
  },
  notFoundResponse: (res, message) => {
    res
      .status(404)
      .json({
        meta: {
          code: 404,
          status: "NOT_FOUND",
          message: message,
        },
        data: null,
      })
      .end();
  },
  conflictResponse: (res, message) => {
    res
      .status(409)
      .json({
        meta: {
          code: 409,
          status: "CONFLICT",
          message: message,
        },
        data: null,
      })
      .end();
  },
  errorResponse: (res, message) => {
    res
      .status(500)
      .json({
        meta: {
          code: 500,
          status: "ERROR",
          message: message,
        },
        data: null,
      })
      .end();
  },

  // Authentication
  successResponseToken(
    res,
    message,
    access_token,
    refresh_token,
    role,
    expire
  ) {
    res.status(200).json({
      meta: {
        code: 200,
        status: "OK",
        message: message,
      },
      data: {
        access_token: access_token,
        refresh_token: refresh_token,
        role: role,
        token_type: "Bearer",
        expires_in: expire,
      },
    });
  },

  noTokenResponse(res, message) {
    res.status(401).json({
      meta: {
        code: 401,
        status: "UNAUTHORIZED",
        message: message,
      },
      data: null,
    });
  },

  forbiddenResponse(res, message) {
    res.status(403).json({
      meta: {
        code: 403,
        status: "FORBIDDEN",
        message: message,
      },
      data: null,
    });
  },

  // Pagination Response
  successPaginationResponse: (
    res,
    message,
    totalItems,
    totalPage,
    currentPage,
    data
  ) => {
    res
      .status(200)
      .json({
        meta: {
          code: 200,
          status: "SUCCESS",
          message: message,
          total_items: totalItems,
          total_page: totalPage,
          current_page: currentPage,
        },
        data: data,
      })
      .end();
  },
};


module.exports = {
  success: (res, message, data) => {
    res
      .status(200)
      .json({
        code: 200,
        message,
        data,
      })
      .end();
  },
  created: (res, message, data) => {
    res
      .status(201)
      .json({
        code: 201,
        message,
        data,
      })
      .end();
  },
  error: (res, message, data) => {
    res
      .status(400)
      .json({
        code: 400,
        message,
        data,
      })
      .end();
  },

  // Response
  successResponse: (res, message, data) => {
    res
      .status(200)
      .json({
        meta: {
          code: 200,
          status: "OK",
          message: message,
        },
        data: data,
      })
      .end();
  },
  createResponse: (res, message, data) => {
    res
      .status(201)
      .json({
        meta: {
          code: 201,
          status: "CREATED",
          message: message,
        },
        data: data,
      })
      .end();
  },
  invalidResponse: (res, message) => {
    res
      .status(400)
      .json({
        meta: {
          code: 400,
          status: "INVALID_REQUEST",
          message: message,
        },
        data: null,
      })
      .end();
  },
  notFoundResponse: (res, message) => {
    res
      .status(404)
      .json({
        meta: {
          code: 404,
          status: "NOT_FOUND",
          message: message,
        },
        data: null,
      })
      .end();
  },
  conflictResponse: (res, message) => {
    res
      .status(409)
      .json({
        meta: {
          code: 409,
          status: "CONFLICT",
          message: message,
        },
        data: null,
      })
      .end();
  },
  errorResponse: (res, message) => {
    res
      .status(500)
      .json({
        meta: {
          code: 500,
          status: "ERROR",
          message: message,
        },
        data: null,
      })
      .end();
  },

  // Authentication
  successResponseToken(
    res,
    message,
    access_token,
    refresh_token,
    role,
    expire
  ) {
    res.status(200).json({
      meta: {
        code: 200,
        status: "OK",
        message: message,
      },
      data: {
        access_token: access_token,
        refresh_token: refresh_token,
        role: role,
        token_type: "Bearer",
        expires_in: expire,
      },
    });
  },

  noTokenResponse(res, message) {
    res.status(401).json({
      meta: {
        code: 401,
        status: "UNAUTHORIZED",
        message: message,
      },
      data: null,
    });
  },

  forbiddenResponse(res, message) {
    res.status(403).json({
      meta: {
        code: 403,
        status: "FORBIDDEN",
        message: message,
      },
      data: null,
    });
  },

  // Pagination Response
  successPaginationResponse: (
    res,
    message,
    totalItems,
    totalPage,
    currentPage,
    data
  ) => {
    res
      .status(200)
      .json({
        meta: {
          code: 200,
          status: "SUCCESS",
          message: message,
          total_items: totalItems,
          total_page: totalPage,
          current_page: currentPage,
        },
        data: data,
      })
      .end();
  },
};
