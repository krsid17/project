let a = +prompt('Enter sides of triangle');
let b = +prompt('Enter sides of triangle');
let c = +prompt('Enter sides of triangle');

if ( a == b && b == c) {
    alert('Triangle is equilateral');
} else if (a == b || b == c || c == a) {
    alert('Triangle is isosceles');
} else {
    alert('Triangle is scalene');
}