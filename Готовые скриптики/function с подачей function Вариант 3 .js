function compare(a){
	return function(b){
		if (a==b){
			return null
		} return a>b
	}
}

var a = prompt("Type a: ")
var b = prompt("Type b: ")

console.log( compare(a)(b) )
