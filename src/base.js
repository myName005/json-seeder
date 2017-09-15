var Modifier = require('./modifier.js')
var Computed = require('./computed.js')
var JsonSeeder = {}


generateSubBlueprints = function (blueprint) {
	for(var key in blueprint)
	{
		if(typeof(blueprint[key]) == 'object' ){
			JsonSeeder.generate(blueprint[key])
		}
	}
}

JsonSeeder.generate = function (blueprint) {
	Modifier.apply(blueprint)
	Computed.apply(blueprint)
	generateSubBlueprints(blueprint)

	return blueprint;
}

JsonSeeder.Modifiers = require('./modifiers.js')

module.exports = JsonSeeder