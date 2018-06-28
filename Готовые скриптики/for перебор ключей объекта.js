//Универсальный перебор объекта по ключам с выводом "значение:ключь"

var user = {
	"x":"a",
	"y":"b",
	"z":"c"
}

for(var i in user) {
	console.log(i + ": " + user[i])
}


/*
//или так

var x = 1;

var user = {};

user.name   = "John";
user.age    = 25;
user.gander = "male";
user.admin  = true;



console.log(user)

for(var i in x) {
	console.log(i + ": " + x[i]);
}
