
var Modifier = {}
Modifier.apply =  function (blueprint) {
	if(blueprint._modifiers == null)
		return blueprint
	
	var mods = blueprint._modifiers
	blueprint._modifiers = null
	delete blueprint._modifiers

	for(var key in mods){
		Object.assign( blueprint, mods[key](blueprint))
	}
}

module.exports = Modifier;