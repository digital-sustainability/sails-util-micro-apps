/**
 * Created by Emmanuel Mahuni. MIT 2018
 */

module.exports = {
		friendlyName: 'Before helper test',


		description: '',


		inputs: {

		},


		exits: {

		},


		fn: async function (inputs, exits) {
				console.log('beforeHelperTest works!');

				// All done.
				return exits.success(true);

		}

};
