// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// // console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// function getExtremeElements(array) {
//   let result;

//   const firstElementIndex = array[0];
//   const lastElementIndex = array.length - 1;

//   result = array[lastElementIndex];
//   return result;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// function clients(name) {
//   let result;
//   const first = name[0];
//   const second = name.length - 1;
//   result = name[second];
//   //   console.log(name[second]);
//   //   (result = name[second]), first;
//   return result;
// }

// console.log(clients(["Mango", "Poly", "Ajax"]));

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);

//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let result;

//   const words = message.split(" ");
//   const wordsItem = words.length;

//   const price = pricePerWord * wordsItem;
//   result = price;
//   return result;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls(fruits.slice(1, 4)));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let result;
//   const qwe = firstArray.concat(secondArray);

//   result = qwe.slice(0, maxLength);

//   return result;
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function findLongestWord(string) {
//   // Change code below this line

//   let mass = string.split(" ");
//   let result = mass[0];

//   for (let i = 0; i < mass.length; i += 1) {
//     if (mass[i].length > result.length) {
//       result = mass[i];
//     }
//   }

//   return result;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

const array1 = ["red", "black", "tomato"];
const array2 = ["red", "black", "tomato"];
let result = [];
for (let i = 0; i < array2.length; i + 1) {
  result[i];
}

console.log(array1.includes(i));
