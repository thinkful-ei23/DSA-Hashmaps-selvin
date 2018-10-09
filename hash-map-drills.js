'use strict';
const HashMap = require('./hash-map');

function main(inputList) {
  const lor = new HashMap(6);
  inputList.forEach(function (input){
    Object.keys(input).forEach(function(prop) {
      lor.set(prop, input[prop]);    
    });
  });
  console.log('lor.get("Maiar"): ', lor.get('Maiar'));
 
}
// main([
//   {Hobbit:"Bilbo"}, 
//   {Hobbit:"Frodo"}, 
//   {Wizard:"Gandolf"}, 
//   {Human:"Aragon"}, 
//   {Elf: "Legolas"}, 
//   {Maiar:"The Necromancer"}, 
//   {Maiar: "Sauron"}, 
//   {RingBearer: "Gollum"}, 
//   {LadyOfLight: "Galadriel"}, 
//   {HalfElven: "Arwen"}, 
//   {Ent: "Treebeard"}
// ]);

function palindromeCheck(str) {
  const pDrome = new HashMap(8);
  const count = {};
  for (let i=0; i< str.length; i++) {
    
    pDrome.set(str[i], 0);
    pDrome.remove(str[i]);

    if(count.hasOwnProperty(str[i])) {
      count[str[i]]++;
    } else {
      count[str[i]] = 0;
    }

   }
   let oddCount =0;
   Object.keys(count).forEach(function(prop) {
     console.log('count[',prop,']', count[prop]);
    if (count[prop] === 0) {
      oddCount++;
    } 

  });
  console.log('count', count);
  if(oddCount <= 1) {
    console.log('oddCount: ', oddCount, ' palindrome: true');
  } else {
    console.log('oddCount: ', oddCount, ' palindrome: false');
  }


  //console.log('pDrome.get("r"): ', pDrome.get('r'));
}


//palindromeCheck('acecarr', );
palindromeCheck('north', );