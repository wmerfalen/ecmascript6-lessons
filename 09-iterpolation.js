/**
 * Strings can be embedded into other strings
 */
const city = 'Taylorsville'
const state = 'Utah'
const user_location = `Hello, I live in ${city} ${state}`

console.log(user_location)

/**
 * Strings can be embedded into other strings. Furthermore,
 * entire operations can be embedded into a string.
 */

const name = `Johnny ${['cash','money'][Math.floor(Math.random() * 2)]}`

console.log(name)
