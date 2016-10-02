/**
 * Contains utility functions that are used by controllers.
 *
 */

/* Constants */
const NOT_FOUND_HTTP_CODE = 404;
/* End Constants */

/**
 * checkIfIdIsInteger
 *
 * @param {String} id - Id url parameter passed in
 * @param {Number} res - Response http object from express
 * @returns {Boolean} true if id passed in is an integer, false if the id is not
 * an integer.
 */
function checkIfIdIsInteger(id) {
  return (id !== parseInt(id, 10).toString()) ? false : true;
}

export default { checkIfIdIsInteger };
