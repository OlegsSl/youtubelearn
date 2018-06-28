function lab(a){
	return function(b){
		if (a>b){
			return ("true")
		} else if (a<b){
			return ("folse")
		} else {
			return ("Bingo")
		}
	}
}

var a = prompt("Type a: ")
var b = prompt("Type b: ")


var labvar = lab(a);
console.log( labvar(b) )