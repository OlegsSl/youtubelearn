function foo(base, count, action){
	for(i = base; i <=count; i++)
		action(i)
}


//var x = console.log()
foo(5,10,function(x){console.log(i + "x")});