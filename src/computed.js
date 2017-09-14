var Computed = {}

var extractName = function (key) {
	return key.substr(1)
}

var keyFilter = function(key){
	return /^\:[a-zA-Z$_][a-zA-Z0-9_]*$/.test(key);
}

Computed.apply = function (blueprint) {
	var keys = Object.keys(blueprint).filter(keyFilter)
	for(var i in keys){
		var key = keys[i]
		var name = extractName(key)
		blueprint[name] = blueprint[key](blueprint)
		delete blueprint[key]
	}
}

module.exports = Computed