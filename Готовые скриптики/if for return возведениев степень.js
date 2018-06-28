function vaz() {
	var num    = prompt("1");
	var cnt    = prompt("2");
	var result = 1;
		for(var i = 0; i < cnt; i++) {
			result *= num;
				console.log(result)
		}
		return result;
	}

console.log(vaz())