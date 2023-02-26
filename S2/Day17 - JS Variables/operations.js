// Variable rules
// a-z, A-Z, 0-9, _, $

// Examples
var name = "Faizan"
var fullname = "Faizan"
var full_name = "Faizan"
var fullName = "Faizan"
var full_name1 = "Faizan"
var _full1_name;
var $full_name = "Faizan";

var const_name = "Faizasn";
var varFullName = "Faizan";

// Arithmetic Operations
var a = 22;
var b = 10;
var c = 5.5//prompt("Enter value for variable C")
c = parseFloat(c)


var sum = a + b + parseFloat(c);
var sum2 = a + b + c;
var sub = a - b;
var mul = a * b
var div = a / b
var rem = a % b



console.log("Sum is:", sum)
console.log("Sum2 is:", sum2)
console.log("Subscrtation is:", sub)
console.log("Mul is:", mul)
console.log("Div is:", div)
console.log("Rem is:", rem)

// Average
var sub1 = 60
var sub2 = 80

var sum = sub1 + sub2
var avg = sum / 2
console.log("Avg:", avg)



var x = 5
x = x + 1

x = x - 1

x += 7
x -= 4

// x = x * 2
x *= 4

// Divide
// x = x / 2
x /= 2


console.log(x)

x++ // Use then increment
++x // Increment then use

x-- // use then decrement
--x // decrement then use

// (), /*, -+
var a = 5;
var b = 2;
var c = 3;
var d = 2;


var result = (a + b) / (c * d)
//  result = 5 + 2 / 3 * 2
console.log(result)

// Strings

var name = "Faizan"
var age = 30
var para = 'Faizan"s age'

var para2 = "This is a pragraph where \
we will learn \
about html"


var final_para = name + "      " + age

var para3 = `This
skdvn svdnn 
sdvjnsvdk sol vds`

// '', "", ``
var myname= ``


var final_para1 = `${name}'s age is "" ${age}`

console.log(typeof final_para1)

console.log(final_para)
console.log(final_para1)

document.write(final_para1)