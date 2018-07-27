/**
 * Prior to es6, we had to use the 'arguments' variable
 * within the function body in order to accept/parse variadic
 * arguments to our function.
 */

/**
 * Old way to do it
 */
var users = [];
var arguments_method = {
	add_user : function(first,last){
		users.push(
			{
				fn: first,
				ln: last,
				subscribe: ( arguments.length > 2 ) ? arguments[2] : 0,
				premium: ( arguments.length > 3 ) ? arguments[3] : 0,
				method: 'arguments'
			}
		);
	}
};

/**
 * Old way to do it (check for type === undefined )
 */
var typeof_method = {
	add_user: function(first,last,subscribe,premium){
		users.push(
			{
				fn: first,
				ln: last,
				subscribe: (typeof subscribe === 'undefined') ? 0 : subscribe,
				premium: (typeof premium === 'undefined') ? 0 : premium,
				method: 'typeof'
			}
		)
	}
}

typeof_method.add_user('jeff','doe');
arguments_method.add_user('john','doe');
typeof_method.add_user('mary','doe',1);
arguments_method.add_user('steven','doe',1,1);


/**
 * Okay, now for the ES6 way
 */

function add_user(first,last, ...opt){
	users.push({
		fn: first,
		ln: last,
		subscribe: (opt.length) ? opt[0] : 0,
		premium: (opt.length > 1) ? opt[1] : 0,
		method: 'es6'
	})
}

add_user('greg','doe')
add_user('kevin','doe',1,1)
add_user('foo','doe',0,1)
console.log(users);
