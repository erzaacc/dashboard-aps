const { CcTicket, sequelize } = require("../../models");

const getTicket = async (req) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 12;
    const offset = (page - 1) * pageSize;

    let { count, rows } = await CcTicket.findAndCountAll({
      where: { group_section: "IT-APS", group_section_status: "OPEN" },
      limit: pageSize,
      offset: offset,
    });
    if (rows.length == 0) {
      return { success: false, message: "No ticket found" };
    }

    const totalPages = Math.ceil(count / pageSize);

    return { success: true, data: { count, totalPages, page, rows } };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getTopModule = async (req) => {
  try {
    const { startDate, endDate } = req.query;

    const queryNew = `
      SELECT cmsssc.name, COUNT(ct.ticket_id) AS total_tickets
      FROM acc_helpdesk.cc_ticket ct
      LEFT JOIN acc_helpdesk.cc_interaction ci ON ct.interaction_id = ci.id
      LEFT JOIN acc_helpdesk.cc_master_sub_sub_sub_category cmsssc 
          ON ci.interaction_sub_sub_sub_category = cmsssc.id
      WHERE ct.status = 'CLOS'
      AND DATE(ct.created_time) BETWEEN :startDate and :endDate
      AND group_section  IN ( 'IT-APS', 'IT_APSDG')
      GROUP BY cmsssc.name
      ORDER BY total_tickets DESC
      LIMIT 10;
    `;

    const query = `
      SELECT cmsssc.name, COUNT(DISTINCT lr.ticket_id) AS total_tickets
      FROM (
          SELECT ctur.ticket_id, ctur.response_by, ctur.response_time, ctur.response_status
          FROM acc_helpdesk.cc_ticket_unit_response ctur
          WHERE ctur.user_group = 'IT-APS'
            AND ctur.response_time >= :startDate
            AND ctur.response_time < :endDate
            AND ctur.response_time = (
                SELECT MAX(response_time)
                FROM acc_helpdesk.cc_ticket_unit_response
                WHERE ticket_id = ctur.ticket_id
            )
      ) AS lr
      LEFT JOIN acc_helpdesk.cc_ticket ct ON lr.ticket_id = ct.ticket_id
      LEFT JOIN acc_helpdesk.cc_interaction ci ON ct.interaction_id = ci.id
      LEFT JOIN acc_helpdesk.cc_master_sub_sub_sub_category cmsssc 
          ON ci.interaction_sub_sub_sub_category = cmsssc.id
      WHERE ct.status = 'CLOS'
      GROUP BY cmsssc.name
      ORDER BY total_tickets DESC
      LIMIT 10;
    `;

    const results = await sequelize.query(queryNew, {
      type: sequelize.QueryTypes.SELECT,
      replacements: { startDate, endDate },
    });
    return { success: true, data: results };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = { getTicket, getTopModule };
