var b = 1;
var i = 0;
while(i < 10) {
	b = b*2; 
	i++;
	console.log(b + " result inside on " + i + " iteration number");
}

console.log(b + " final result")

//Вариант Препода

var num = prompt("Enter number: ");
var exp = prompt("Enter exp: ");
var result = 1;
var cnt = 1;
while(cnt <= exp) {
	result *=num;
	cnt++;
}

console.log(result + " result is by Препод");

//Упрощенный вид верхнего кода while 2 в 10сятой степени.
//console.log(Math.pow(2, 10)) 
//console.log(a + " a")



