let a = +prompt('Enter sides of triangle');
let b = +prompt('Enter sides of triangle');
let c = +prompt('Enter sides of triangle');

if ( a + b > c ) {
    alert('Triangle is valid');
} else if ( b + c > a ) {
    alert('Triangle is valid');
} else if (a + c > b ) {
    alert('Triangle is valid');
} else {
    alert('Triangle is invalid');
}