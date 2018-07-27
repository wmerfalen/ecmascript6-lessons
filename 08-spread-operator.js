/**
 * PHP has a function called call_user_func_array()
 * The function accepts an array. Each array element is 
 * a positional parameter to the function you specify.
 *
 * The spread operator in es6 is similar to this, but
 * it does a lot more than just slice up an array of
 * elements to pass to a function. It can be used on
 * strings as well.
 */

let users = []
function add_user(...args){
	users.push(
		{
			fn: args[0],
			ln: args[1],
			subscribe: args[2],
			premium: args[3]
		}
	)
}

/**
 * String splitting (the old way)
 */
console.log("foobar".split(""))	/** turns our string into an array */

/**
 * String splitting (the ES6 way)
 */
console.log([..."foobar"])

/**
 * Parameter passing (the old way)
 */

add_user.apply(this,['john','doe',1,0])

/**
 * Using the spread operator
 */
let info = ['jane','doe',0,1]
add_user(...info)

/**
 * Function returns can be used
 *
 * Note: I think this is rather silly and not very readable. 
 * It's just for show, really. 
 */
add_user(...(v =>['jeff','doe',1,1])())

/**
 * The addition operator converts true/false to 1 or 0
 */
let steven = v => ['steven','api', +((Math.random() * 10) > 5), +((Math.random() * 10) > 5)]
add_user(...steven())

console.log(users)
