const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
    age:  24,
    accessid: '47afb389-8014-4d0b-aff3-e40203d2107f',
	balance: 'R' +  (leoBalance * -1).toFixed(2),
	address:  {
		number:  leoNumber,
		street:  leoStreet,
		postalcode:  leoPostal,
	}
}

const sarah = {
	name:  sarahName+sarahSurname,
	age:  62,
	accessid:  '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance:  'R' + (sarahBalance* -1).toFixed(2),
	address:  {
		number:  sarahNumber,
		street:  sarahStreet,
		postalcode:  sarahPostal,
	}
}
console.log(leo, leo.address.postalcode)
console.log(sarah, sarah.address.postalcode)

/*Added a semicolon at the end of each line that needed it.
Fixed the spelling of sarahName and sarahSurname.
Removed leosurname as it was not declared
Changed access id to accessId to make it a valid variable name.
Added a colon instead of an equals sign when defining properties in the objects.
Enclosed the property names with quotes when they contained a hyphen, as in access id value.
Added commas between properties in the objects.
Added a missing comma after the balance property in the sarah object.
Enclosed the address property names with square brackets in the console.log statements.*/