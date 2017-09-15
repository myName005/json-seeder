var clone = require('clone')
var Modifiers = {}


Modifiers.repeat = function (n,name) {
	return function (blueprint) {
		var result = []

		for(var i = 0; i<n; i++){

			var subBlueprint = clone(blueprint)

			if(name != null )
				subBlueprint[name] = i

			result.push( subBlueprint )
		}
		console.log(result)
		return result
	}
}

Modifiers.rangeRepeat = function (min,max,name) {
	return function (blueprint) {
		var result = []

		var n = Math.floor( Math.random()*(max - min) )+min

		for(var i=0;i<n;i++){

			var subBlueprint = clone(blueprint)

			if(name != null )
				subBlueprint[name] = i
			
			result.push( subBlueprint )
		}
		return result
	}
}






module.exports = Modifiers