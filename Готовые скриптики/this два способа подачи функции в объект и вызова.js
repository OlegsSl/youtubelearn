/*
var book = {
	name: "Cooking Book",
	price: "5$",
	show: function() {
		console.log("'" +this.name + "' " + "price is: " + this.price)
	}
}

book.show()
*/

function show1(){
	console.log("'" +this.name + "' " + "price is: " + this.price)
}

var book1 = {
	name: "Bible",
	price: "I`ts For Free",
	s1 :show1
}


book1.s1()


