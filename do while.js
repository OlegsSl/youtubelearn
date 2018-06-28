//Выполняет блок do пока не выполнется условие while

do {
	var answer = prompt("Say 'stop':");
	console.log("You said '" + answer + "'.")
}
while(answer != "stop"){
	console.log("Congratulations!")
};