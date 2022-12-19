let year = +prompt('Enter year');

if ( (year % 4 == 0 ) && ( year % 100 != 0) || (year % 400 == 0) ) {
    alert('Year is leap year')
} else {
    alert('year is not leap year')
}