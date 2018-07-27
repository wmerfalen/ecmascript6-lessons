const a = [9,10,11];

function f(){
	y = 20	/** var declares y which means it's accessible before it's defined */
	x = 15  /** not the same 'x' as in the for loop */
	console.log(`x: ${x}`)
	for(let i =0; i < 3;i++){
		var y;
		console.log(`y: ${y}`)
		/**
		 * x is not hoisted to the enclosing function f when you
		 * use 'let'. If 'var' was used here, it would be 
		 * accessible outside of this for loop.
		 */
		let x = a[i];
		console.log(`x: ${x}`)
	}
	console.log(x)	//not the same x as was defined within the for loop
}

//console.log(x); // doesn't work

f()
