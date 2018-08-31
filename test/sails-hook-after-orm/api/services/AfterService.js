/**
 * Created by Emmanuel Mahuni. MIT 2018
 */
module.exports = {
    /**
     * Can be overrided on AfterService.js file on your sails server
     * @param req
     * @param res
     */
    afterServiceTest: function (req, res) {
        console.log('test method on AfterService');
    }
};
