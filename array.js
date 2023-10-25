var mixed = ['Hridoy', 6473, false, 'player', 'Durjoy'];
var numbers = [10, 15, 55, 40, 22, 567, 349, 6745, 5434, 7923, 4642,];
console.log(numbers.length);
var index = numbers.indexOf(6745);
numbers[6] = 30;
console.log(numbers);

var people = ['rohim', 'korim', 'kamal', 'iirkjg']
people.push('hridoy', 'annana', 'borna', 'durjoy');
people.push('mina')
people[3] = 'annana';
people.pop();
people.pop();
people.pop();

people.push('hridoy');
people.push('durjoy');
people.unshift('fygu', 'bdhfg');
people.shift('saha', 'rudro');

console.log(people);

var kg = 1000;
var gm = 999;

if (kg > gm) {
   console.log('soman'); 
}

var  food = false;
if (food == true) {
   console.log('khabar daw') ;
} else {
    console.log('deo na');
}

var friend = 20;
if (friend > 25) {
  console.log('you have a gf');  
} else  {
    console.log('you are single');
}

var flat = true;
var car = false;
var money = 50000;
if (flat ==true || money < 50000 || car == true) {
    console.log('i am rich');
} else {
  console.log('i am poor');  
}
var taka = 50;
var tea = 10;
var danish = 50;
var wellpacked = true;
 if (taka >= danish ) {   
  if (wellpacked = true) {
  console.log('danish dea tea khamo')
 }  
} else if (taka > tea) {
  console.log('tea khabo') 
}


 var num = 50;
 var oil = 40;
  if (num >= 10) {
    console.log ("Num is more than 10.")
    if (num > oil) {
      console.log ("oil is good.")
     }
  } else {
    console.log ("Num is less than 10.")
  }

   
