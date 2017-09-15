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
	var _blueprint = Modifier.apply(blueprint)
	_blueprint = Computed.apply(_blueprint)
	generateSubBlueprints(_blueprint)

	return _blueprint;
}

JsonSeeder.Modifiers = require('./modifiers.js')

module.exports = JsonSeeder