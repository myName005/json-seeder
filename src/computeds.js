var Computeds = {}
var rand = Math.random
var floor = Math.floor

Computeds.integer = function (min,max) {
	return function (blueprint) {
		return  floor(rand()*(max-min) + min)
	}
}

Computeds.float = function (min,max) {
	return function (blueprint) {
		return  rand()*(max-min) + min
	}
}

Computeds.pickFrom = function (arr) {
	return function (blueprint) {
		var i = floor(rand()*arr.length())
		return arr[i]
	}
}

module.exports = Computeds