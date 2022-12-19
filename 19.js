let phy = +prompt('Enter marks of physics');
let chem = +prompt('Enter marks of chemistry');
let bio = +prompt('Enter marks of biology');
let math = +prompt('Enter marks of maths');
let comp = +prompt('Enter marks of computer');

let percent = ((phy + chem + bio + math + comp) / 500) * 100;

if ( percent >= 90 ) {
    alert('Grade A')
} else if ( percent >= 80 ) {
    alert('Grade B')
} else if ( percent >= 70 ) {
    alert('Grade C')
} else if ( percent >= 60 ) {
    alert('Grade D')
} else if ( percent >= 40 ) {
    alert('Grade E')
} else if ( percent < 40 ){
    alert('Grade F')
}