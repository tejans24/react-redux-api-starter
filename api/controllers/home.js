/**
 * get
 *
 * Action: GET
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {JSON} the base json object for the root url
 **/
function get(req, res) {
  res.json("Default api home!");
}

export default { get };
