/**
 * allowApp
 *
 * @module      :: Policy
 * @description :: test policy allowing by simply allowing the action
 * @help        :: http://sailsjs.org/#!/documentation/concepts/Policies
 */
module.exports = function(req, res, next) {

  return next();

};
