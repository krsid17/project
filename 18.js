let num1 = +prompt('Enter 1st number');
let num2 = +prompt('Enter 2nd number');

if (num1 > num2) {
    let profit = num1 - num2;
    alert(`the profit is ${profit}`)
} else if(num2 > num1) {
    let loss = num2 - num1;
    alert(`the loss is ${loss}`)
}