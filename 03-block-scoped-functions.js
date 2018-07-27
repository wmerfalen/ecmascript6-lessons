{
	console.log('f(): ' + f());
	function f(){ return 0 }
	console.log('f() === 2:' + (f() === 2));
	{
		/** I'm a block */
		function f(){ return 2 }
		console.log('f() === 1: ' + (f() === 1), f())
	}
	console.log('f() === 0: ' + (f() === 0), f());
}
