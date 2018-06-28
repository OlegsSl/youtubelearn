//-------------------
//Брек вконце остановит скрипт после того как будет совпадение в кейсе.
//Дефайл слежит аналогом else если совпадений не найдено.
var x = 20;
switch(x) {
	case 0: console.log("Zero"); break;
	case 1: console.log("One"); break;
	case 2: console.log("Two"); break;
	case 3: console.log("Three"); break;
	case 4: console.log("Four"); break;
	default: console.log(".....");
}

//-------------------
//ВЫведет все что делится на 3
//Break метка , остановит определенныую функцию.
//Кантинью выведет из цикла иф и продолжит в консоль лог и брейк.
mark: while(true) {
	//
	for(var i=322; i<356; i++ ) {
		if(i % 3 != 0) {
			continue;
		}
		console.log(i)
		break mark;
	}
	//
}