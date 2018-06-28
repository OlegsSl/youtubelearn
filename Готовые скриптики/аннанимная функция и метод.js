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





