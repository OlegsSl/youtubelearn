var lines = 15;
var line = "";
var symbol = prompt("Enter symbol: ");
var cnt = "1";

while (cnt <= lines) {
	line += symbol;
	console.log(line);
	cnt++;
}