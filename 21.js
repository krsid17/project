let units  = +prompt('Enter electricity unit');
let bill = 0;


if (units <= 50) {
    bill = bill + units * 0.50;
    let total_bill = bill + bill * 0.20;
    alert(total_bill);
} else if( 50 < units <= 150) {
    bill = bill + units * 0.75;
    let total_bill = bill + bill * 0.20; 
    alert(total_bill);
}  else if( 150 < units <= 250) {
    bill = bill + units * 1.2;
    let total_bill = bill + bill * 0.20; 
    alert(total_bill);
} else if (units > 250) {
    bill = bill + units * 1.5;
    let total_bill = bill + bill * 0.20; 
    alert(total_bill); 
}
