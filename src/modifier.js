
var Modifier = {}
Modifier.apply =  function (blueprint) {
	if(blueprint._modifiers == null)
		return blueprint
	
	var mods = blueprint._modifiers
	delete blueprint._modifiers
	var result = blueprint
	for(var key in mods){
		result =  mods[key](result)
	}
	return result
}

module.exports = Modifier;