

/* 10
main.onblur = function() {
	var mainInput = document.getElementById("main");
	var mainInputVal = mainInput.value;
	var date = new Date;
	var yearNow = date.getFullYear();
	
	console.log(yearNow - mainInputVal);
};
*/


/* 9 
main.onblur = function(){
	var mainInput = document.getElementById("main");
	var mainInputVal = mainInput.value;
	var mainInputValArr =  mainInputVal.split(".");
	var forReverseArr = [];
	var str = "";
	
	for(var i = (+mainInputValArr.length - 1); i >= 0; i-- ){
		var x = mainInputValArr[i]
		forReverseArr.push(x);
		
	};
	str = forReverseArr.join('-')
	document.getElementById("main").value = str 

};
*/

/* 8 
ifo.onblur = function(){
	var mainInput = document.getElementById("ifo");
	var mainInputVal = mainInput.value;
	var mainInputArr = mainInputVal.split(" ");
	var longest = 0

	for(var i = 0; i < mainInputArr.length; i++){
		if(mainInputArr[i].length > longest ){
			longest = mainInputArr[i].length
			console.log("Кол симв: "+ longest + " Слово: " + mainInputArr[i])
		}
	};
};
*/


/* 7
ifo.onblur = function(){
	var mainInput = document.getElementById('ifo');
	var x  = mainInput.value;
	var xVal = x.split(' ');
	var z = xVal.length;
	console.log(z)
};
*/


/* 6
ifo.onblur = function (){
	
	var mainInput = document.getElementById('ifo');
	var mainArr = mainInput.value
	var mainArrSpl = mainArr.split(' ');
	var z = "";
	
	for(var i = 0; i < mainArrSpl.length; i++){
		var x = mainArrSpl[i].charAt(0);
		var y = x.toUpperCase();
		z += y + mainArrSpl[i].slice(1) + " ";
	};
	
	document.getElementById("ifo").value = z; 
};
*/



/* 5
 
ifo.onblur = function (){
	
	var inputIfo = document.getElementById('ifo');
	var inputIfoArr = inputIfo.value;
	var divArr = document.getElementById('divEl').children;
	var x = inputIfoArr.split(' ');
	for(var i = 0; i < divArr.length; i++){
		divArr[i].value = x[i];
	};
	console.log(x)
};

*/


/* 4
var inputStr = document.getElementById("inputField");
var inputStrValue;
var inputStrSplitArr = {};
var inputSum = 0;
var inputAvegareResult;
var x;
var resultPar = document.getElementById('resultPar');

inputStr.onblur = function() {
	inputStr = document.getElementById("inputField");
	inputStrValue = inputStr.value;
	inputStrSplitArr = inputStrValue.split(',');
	for(var i = 0;i < inputStrSplitArr.length;i++){
		inputSum += +inputStrSplitArr[i];
		x = inputStrSplitArr.length;
	};
	inputAvegareResult = inputSum / x;
	resultPar.innerHTML = inputAvegareResult;
};
/*

/*  3 
var inputStr;
var inputStr2 = 0;
var inputStr3 = 0;

input.onblur = function() {
	inputStr = input.value;
	
	var s = inputStr;
		for (var i = 0; i < s.length; i++) {
		inputStr2 = (s.charAt(i));
		inputStr3 += +inputStr2
	}
	console.log(inputStr3)
};

*/

