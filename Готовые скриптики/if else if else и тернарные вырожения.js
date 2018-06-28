//-------------------
var x = 1;
//if (x == 1)
//	y = "One";
//else 
//	y = "Zero";
// Те же самые условия , только в тернарном виде
y = (x == 1) ? "One" : "Zero";

//-------------------
//Ветвления функции
for(var i = 0; i <= 10; i++) {
	if(i == 0) {
		console.log(i + "- zero")
	} else if(i % 2 == 0) {
		console.log(i + "- even")
	} else {
		console.log(i + "- odd")
	}
}

//--------------------
//У примера с выполненным тернарно есть баги
var age = prompt("Введите возрост: ")
var y = "";

y = (age >= 18) ? "Заходи" : "Только с родителями";
console.log(y)

//Тут баги сведены на 0 т.к есть esle.
if (age >=18 && age<60) {
	console.log("Вам работать еше и работать");
} else if (age < 18 && age >=1) {
	console.log("В школу");
} else if (age > 59) {
	console.log("Пора на пенсию");
} else {
	console.log("Врядли это число")
}
//-------------------