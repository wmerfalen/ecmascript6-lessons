let users = []

/**
 * Charge the customer.
 * Randomly declines the card. Worst credit card api ever. 
 */
function charge(first,last,cc,cvv){
	if((Math.random() * 10) > 5){
		return true
	}else{
		console.log('card declined: ' + [first,last,cc,cvv].join(' '))
	}
}
/**
 * Create a user
 *
 * By default we want to have them subscribed to our emailing list.
 * They are not a premium user unless they have paid first.
 */
function user(first, last, subscribe = 1, premium = 0) {
	users.push({fn: first,ln: last,sub: subscribe,prem: premium})
	return users.length
}

user('john','doe')
user('mary','klein',0,charge('mary','klein','2222-3333-4444-5555','555'))
user('jeff','markson',1,charge('jeff','markson','1111-2222-3333-4444','123'))
user('andrew','foobar',0,charge('andrew','foobar','1221-2332-3443-4554','123'))

/** 
 * Print all premium users
 */
users.map( u => u.prem && console.log(u.fn + ' ' + u.ln + ' is a premium user'))
