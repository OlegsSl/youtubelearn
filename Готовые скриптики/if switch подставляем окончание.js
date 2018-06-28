//Подставляем верное окончание
var num = prompt("Число ворон");
var str = "На ветке сидит "+num+" ворон"
var x = "";
/*
1 -> а
2,3,4 -> ы
11 -14 -> a(исключение)
*/
if(num%100 < 11 || num%100 > 14) {
	switch(num%10){
		case 1: x="а"; break;
		case 2:
		case 3:
		case 4: x="ы"; 
	}
}

console.log(str + x)