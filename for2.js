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











/*
function some(){
	console.log(this.age)
}

var user = {
	name   : "John",
	age    : 25,
	gander : "male",
	admin  : true,
	say: function(word){
		console.log(word + " from " + this.name);
		this.foo()
	},
	foo: some
};

user.say("Hello")

*/



